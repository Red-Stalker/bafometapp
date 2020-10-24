import React, {useState} from "react"
import classes from "./ModalLogIn.module.css"
import {useFormik} from "formik";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Checkbox} from "primereact/checkbox";
import {Button} from "primereact/button";
import showIco from "./icons/show.svg"
import {Link} from "react-router-dom";

const ModalLogIn = (props) =>{
    const [disabledBtn, setDisabledBtn] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    /*useEffect(()=>{
        if(!formik.errors && formik.values.email.length !== 0 && formik.values.password.length !== 0){
            setDisabledBtn(false)
        }
    },[formik.values])*/
    const validate = values =>{
        const errors = {}
        if (!values.email) {
            errors.email = 'Заполните поле';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Неправильный email';
        }
        if (!values.password) {
            errors.password = 'Заполните поле';
        }else if(values.password.length < 6){
            errors.password = 'Пароль должен быть от 6 символов'
        }

        let dis = values.email.length !== 0 && values.password.length !== 0 && Object.keys(errors).length == 0
        setDisabledBtn(!dis)

        return errors
    }

    const formik = useFormik({
        initialValues: {
            email:'',
            password:'',
            saveData: false
        },
        validate,
        validateOnBlur: true,
        onSubmit: values => {
            console.log(values)
        }
    })

    return(
        <div className={classes.inner}>
            <h2 className ={classes.titleAuth}>Добро пожаловать!</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="email" className={classes.titleForms}>Email</label>
                        <InputText id="email" type="text"
                                   className={formik.errors.email ? "p-invalid": ''}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.email}
                        />
                        {formik.errors.email ?  <small id="username2-help" className="p-invalid p-d-block">{formik.errors.email}!</small> : null}
                    </div>
                    <div className={`p-field`}>
                        <label htmlFor="password" className={classes.titleForms}>Пароль</label>
                        <Password id="password"
                                  className={formik.errors.password ? "p-invalid": ''}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.password}
                        />
                        <div className={classes.showPassword} onClick={()=>{
                            setShowPassword(!showPassword)
                            if(showPassword){
                                document.querySelector('#password').type = 'text'
                            }else{
                                document.querySelector('#password').type = 'password'
                            }
                        }}><img src={showIco} alt="show"/></div>
                        {formik.errors.password ?  <small id="username2-help" className="p-invalid p-d-block">{formik.errors.password}!</small> : null}
                    </div>
                </div>
                <Link className={classes.passForgot} href="#">Забыли пароль?</Link>
                <div className={classes.saveDataAndBtnInner}>
                    <div>
                        <Checkbox className={classes.checkbox} id="saveData" checked={formik.values.saveData} onChange={formik.handleChange}></Checkbox>
                        <label htmlFor="saveData" className="p-checkbox-label">Запомнить данные для входа</label>
                    </div>
                    <Button type="submit" label="Войти" disabled={disabledBtn} className={`p-button-rounded ${classes.btn} ${classes.btnLogin}`} />
                </div>
            </form>
        </div>
    )
}

export default ModalLogIn;