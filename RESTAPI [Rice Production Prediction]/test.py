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


@app.route('/predict-production/<area_>/<temp_>',methods = ['GET'])
def predict_production(area_,temp_):
            print(area_)
            print(temp_)
            now = datetime.datetime.now()
            year=now.year
            month=now.month
            day=now.day
            one=year%10
            print(one)
            year=year/10
            two=int(year%10)
            print(two)
            yr=two*10+one
            print("Day ",day,"Month ",month,"Year ",yr)
            monthname=calendar.month_name[(month+1)%12]
            print("https://www.accuweather.com/en/in/ratnagiri/189289/"+str(monthname.lower())+"-weather/189289?monyr="+str((month+1)%12)+"/"+str(day)+"/"+str(yr)+"&view=table")
            model = load_model('lstm_model.h5')
            X,ytrain=get_train()
            X,ytest = get_test()
        
            weather=temp_

            print("X :",X)
            area=area_
            X=np.array([[[weather]]],np.float32)
            ytest = model.predict(X, verbose=0)
            print("Predicted Output is :")
            print(ytest)
            yvalue=ytest[0]
            ratio=yvalue[0]
            result = float(area*ratio)
            resp = jsonify(dict({"Possible Production ": result}))
            resp.status_code = 200
            return resp
	
def get_train():
    data = pd.read_csv("train.csv",usecols = ['Avg Month Temp'])
    df=data.values
    X=df
    data = pd.read_csv("train.csv",usecols = ['Ratio'])
    df=data.values
    y=df
    X = np.reshape(X, (X.shape[0], 1, X.shape[1]))
    y = np.reshape(y, (y.shape[0]))

    return X, y
def get_test():
    data = pd.read_csv("test.csv",usecols = ['Avg Month Temp'])
    df=data.values
    X=df
    data = pd.read_csv("test.csv",usecols = ['Ratio'])
    df=data.values
    y=df
    # print("Y NEW SHAPE :",y.shape)
    X = np.reshape(X, (X.shape[0], 1, X.shape[1]))
    y = np.reshape(y, (y.shape[0]))
    # print("Y NEW CHANGED SHAPE :",y.shape)
    # print("X NEW :",X)
    # print("Y NEW :",y)
    return X, y




if __name__ == "__main__":
    app.run()