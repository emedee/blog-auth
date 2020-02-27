<template>
    <div>
        <div class="blue"></div>
        <div class="body">
            <div class="left-side">
                <p class="welcome">Welcome</p>
                <p class="newAccount">Sign In to your account to continue</p>
                <input type="email" name="" id="" placeholder="Email address" class="input" v-model="signupField.emailAddress">
                <input type="password" name="" id="" placeholder="Password" class="input" v-model="signupField.passWord">
                <p class="gotAccount">Don't have an account? <router-link to="/" class="rout">Sign Up</router-link></p>
                <button class="btn-signUp" @click="signIn">Login</button>
                <p v-if="status" class="danger">{{loginToProceed}}</p>
                <p v-else class="danger">Invalid username or password!</p>
            </div>
            <div class="right-side">
                <p class="join">Join our community of bloggers as we Create unique content that will not only shape the world, but make it a better place</p>
            </div>
        </div>
        <div class="footer">

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            signupField: {
                fullName: '',
                emailAddress: '',
                country: '',
                passWord: '',
            },
            loginDetails: [],
            status: true,
            loginToProceed: 'Login to proceed'
        }
    },
    methods:{
        retrieveData(){
            this.$http.get('https://signin-details-6112e.firebaseio.com/data.json')
                .then(function(res){
                return res.json();
                })
                .then(function(data){
                const resultArray = [];
                for (let key in data){
                    const user = data[key]
                    user.id = key
                    resultArray.push(data[key]);
                }
                this.loginDetails = resultArray;
                })
        },
        signIn(){
           for(let i = 0; i < this.loginDetails.length; i++){
               if(this.signupField.emailAddress === '' || this.signupField.passWord === ''){
                   this.loginToProceed = 'Please enter your email and password'
               }else if(this.loginDetails[i].emailAddress.match(this.signupField.emailAddress) && this.loginDetails[i].passWord.match(this.signupField.passWord)){
                    alert('Welcome to our Blog!')
                    this.status = true
                    this.signupField = '';
                    this.loginToProceed = 'Login to proceed'  
                    return
                }else{
                    this.status = false;
                }
           }  
                  
        },
    },
    created(){
        this.retrieveData();
    }
}
</script>

<style scoped>
@media (max-width: 575.98px) {
    .body{
        flex-direction: column !important;
        width: auto !important;
        height: auto !important;
        
    }
    .input{
        padding: 10px 80px 10px 10px !important;
    }
    .btn-signUp{
        padding: 15px 120px 15px !important;
    }
    .left-side{
        width: 100% !important;
        height: 100vh !important;
        padding-top: 50px !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        background: url('../assets/Images/Image-Placeholder.png') !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
    }
    .right-side{
        display: none !important;
    }
    .welcome{
        color: #E5E5E5 !important;
    }
    .newAccount{
        width: 50% !important;
    }
    .gotAccount{
        font-size: 10px !important;
    }
}
p{
    margin: 0px !important;
}
.danger{
    color: red;
    font-weight: bold;
    font-family: Proxima Nova;
}
.footer{
    position: absolute;
    height: 179px;
    left: 0px;
    top: 821px;
    background: linear-gradient(180deg, rgba(218, 223, 230, 0) 0%, #649EF0 100%);
}
button:hover{
    cursor: pointer;
}
.btn-signUp{
    left: 10.07%;
    right: 61.73%;
    top: 62.1%;
    bottom: 31.9%;
    background: #2565C7;
    box-shadow: 0px 12px 35px rgba(37, 101, 199, 0.2);
    border-radius: 100px;
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    padding: 21px 245px 25px;
    /* margin-bottom: 140px; */
}
.gotAccount{
    margin-top: 20px !important;
    margin-bottom: 27px !important;
    height: 12px;
    left: 393px;
    top: 582px;
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    color: #5C5C5C;
    text-align: center;
}
.join{
    width: 299px;
    height: 42px;
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
}
.input{
    margin-top: 9px;
    height: 14px;
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: rgba(92, 92, 92, 0.8);
    padding: 22px 341px 24px 20px;
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    border-radius: 100px;
}
.body{
    display: flex;
    flex-direction: row;
}
.left-side{
    width: 50%;
    background: #E5E5E5;
    text-align: center;
    padding: 207px 0px 0px;
}
.right-side{
    padding-top: 30px;
    display: flex;
    justify-content: center;
    width: 50%;
    height: 100vh;
    background: url('../assets/Images/Image-Placeholder.png');
    background-repeat: no-repeat;
}
.welcome{
    height: 30px;
    left: 293px;
    top: 207px;
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 30px;
    color: #5C5C5C;
}
.newAccount{
    height: 14px;
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: #5C5C5C;
    margin-top: 10px !important;
    margin-bottom: 20px !important;
}
</style>