from gensim import corpora, models, similarities
from collections import defaultdict
import pandas as pd
import numpy as np
import pandas as pd
import numpy as np
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM
from numpy import array
from keras.models import load_model
from sklearn.metrics import confusion_matrix
import datetime
import calendar
import pymysql
from app import app
from db_config import mysql
from flask import jsonify
from flask import flash, request
from werkzeug import generate_password_hash, check_password_hash

def get_data():
    data = pd.read_csv("querydataset.csv",usecols = ['Query'])
    df=data.values
    X=df
    data = pd.read_csv("querydataset.csv",usecols = ['Answer'])
    df=data.values
    y=df
    # print("Y NEW SHAPE :",y.shape)
    X = np.reshape(X, (X.shape[0], 1, X.shape[1]))
    y = np.reshape(y, (y.shape[0]))
    return X, y


@app.route('/query/<query>',methods = ['GET'])
def give_answer(query):
    documents=[]
    X,y=get_data()
    for i in range(0,len(X)):
        check=X[i]
        check1=check[0]
        check2=check1[0]
        documents.append(check2)

    stoplist = set(['is', 'how'])

    texts = [[word.lower() for word in document.split()
            if word.lower() not in stoplist]
            for document in documents]

    # print(texts)
    frequency = defaultdict(int)
    for text in texts:
        for token in text:
            frequency[token] += 1
    texts = [[token for token in text if frequency[token] > 1]
            for text in texts]
    dictionary = corpora.Dictionary(texts)

    corpus = [dictionary.doc2bow(text) for text in texts]
    lsi = models.LsiModel(corpus, id2word=dictionary, num_topics=2)
    doc = query #input here
    vec_bow = dictionary.doc2bow(doc.lower().split())

    # convert the query to LSI space
    vec_lsi = lsi[vec_bow]
    index = similarities.MatrixSimilarity(lsi[corpus])

    # perform a similarity query against the corpus
    sims = index[vec_lsi]
    sims = sorted(enumerate(sims), key=lambda item: -item[1])

    print(sims)
    tup=sims[0]
    pos=tup[0]
    resp = jsonify(dict({"Answer" : y[pos]}))
    resp.status_code = 200
    return resp #jsonObject

if __name__ == "__main__":
    app.run()
# (base) E:\Mini Project Work>"C:/Users/Vedant Sakhardande/Anaconda/python.exe" "e:/Mini Project Work/sentsim.py"
# paramiko missing, opening SSH/SCP/SFTP paths will be disabled.  `pip install paramiko` to suppress
# Enter the query :Which pesticide is used for rice cultivation in ratnagiri
# [(1, 1.0), (2, 0.93452114), (0, 0.7466595)]
# The Answer is : Monorin