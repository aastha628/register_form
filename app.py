from flask import Flask, request, jsonify, render_template
import requests
import json

app=Flask(__name__)

@app.route('/',methods=["GET","POST"])
def home():
    return render_template("index.html")

@app.route('/postdata',methods=['GET','POST'])
def postdata():
    if request.method=="POST":
        name = request.form.get("name")
        email = request.form.get("email")
        phone = request.form.get("phone")
        gender = request.form.get("gender")
        location1 = request.form.get("lat")
        location2 = request.form.get("lng")
    location=location1+" , "+location2
    user_data={"name":name, "email":email, "phone":phone, "gender":gender, "location":location}
    register_url ="https://user-register-data.herokuapp.com/"
    r = requests.post(url= register_url,json=user_data)
    data=json.loads(r.text)
    return render_template("submit.html")



if __name__ == "__main__":
    app.run()
