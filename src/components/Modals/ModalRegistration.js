import React, {useState} from "react"
import classes from "./ModalRegistration.module.css"
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Checkbox} from "primereact/checkbox";
import {Button} from "primereact/button";
import showIco from "./icons/show.svg";
import {useFormik} from "formik";
import {connect} from "react-redux";
import {registration, registrationEmail, registrationOTP, setUserFinal} from "../../redux/registration-reducer";
import ModalRegistrationEmail from "./ModalRegistrationEmail";
import ModalRegistrationOTP from "./ModalRegistrationOTP";

const ModalRegistration = (props) =>{
    const [disabledBtn, setDisabledBtn] = useState(true)
    const [disabledPassword, setDisabledPassword] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

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

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Заполните поле';
        } else if(values.password !== values.confirmPassword){
            errors.confirmPassword = 'Пароли не совпадают';
        }

        if (!values.name) {
            errors.name = 'Заполните поле';
        }

        if (values.dataProcessing !== true) {
            errors.dataProcessing = 'Обязательное поле для заполнения';
        }

        let dis = values.email.length !== 0 &&
            values.password.length !== 0 &&
            values.name.length !== 0 &&
            values.confirmPassword.length !== 0 &&
            Object.keys(errors).length == 0
        setDisabledBtn(!dis)

        let disPassword = values.password.length !== 0
        setDisabledPassword(!disPassword)

        return errors
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: props.email,
            password:'',
            confirmPassword: '',
            dataProcessing: false
        },
        validate,
        validateOnBlur: true,
        onSubmit: values => {
            props.registration(values.email, values.name, values.password)
        }
    })

    if(props.isRegistrated){
        return (
            <div className={classes.inner}>
                <h2 className ={classes.titleAuth}>Вы успешно зарегистрированы!</h2>
            </div>
        )
    }else{
        return(
            <div className={classes.inner}>
                {!props.validateEmail &&
                    <ModalRegistrationEmail registrationEmail={props.registrationEmail}/>
                }
                {props.validateEmail && !props.validateOTP &&
                    <ModalRegistrationOTP registrationOTP={props.registrationOTP} email={props.email}/>
                }
                {props.validateEmail && props.validateOTP &&
                <div>
                    <h2 className ={classes.titleAuth}>Регистрация</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="name" className={classes.titleForms}>Ваше имя</label>
                                <InputText id="name" type="text"
                                           className={formik.errors.name ? "p-invalid": ''}
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                           value={formik.values.name}
                                />
                                {formik.errors.name ?  <small id="username2-help" className="p-invalid p-d-block">{formik.errors.name}!</small> : null}
                            </div>
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
                            <div className={`p-field ${classes.confirmPassword}`}>
                                <label htmlFor="confirmPassword" className={classes.titleForms}>Подтвердите пароль</label>
                                <Password id="confirmPassword"
                                          className={formik.errors.confirmPassword ? "p-invalid": ''}
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          value={formik.values.confirmPassword}
                                          disabled={disabledPassword}
                                />
                                {formik.errors.confirmPassword ?  <small id="username2-help" className="p-invalid p-d-block">{formik.errors.confirmPassword}!</small> : null}
                            </div>
                        </div>
                        <div className={classes.registrationBtnCheck}>
                            <div>
                                <Checkbox className={classes.checkbox} id="dataProcessing" checked={formik.values.dataProcessing} onChange={formik.handleChange}></Checkbox>
                                <label htmlFor="dataProcessing" className="p-checkbox-label">Согласие на обработку персональных данных</label>
                            </div>

                            {formik.errors.dataProcessing ?  <small id="username2-help" className="p-invalid p-d-block">{formik.errors.dataProcessing}!</small> : null}
                        </div>
                        <div>
                            <Button type="submit" label="Регистрация" disabled={disabledBtn} className={`p-button-rounded ${classes.btn} ${classes.btnLogin} ${classes.btnRegistration}`} />
                        </div>
                    </form>
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    email: state.registration.email,
    validateEmail: state.registration.validateEmail,
    validateOTP: state.registration.validateOTP,
    isRegistrated: state.registration.isRegistrated
})

export default  connect(mapStateToProps,{setUserFinal, registration, registrationOTP, registrationEmail})(ModalRegistration);