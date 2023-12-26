import { useState } from "react";
import { useAuth } from "../store/auth";


const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
}

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);


  const [userData,setUserData] = useState(true);

  const {user} = useAuth();
  if(userData && user){
    setContact({
      username:user.username,
      email: user.email,
      message:user.message,
    })
  }


  

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   

    try {
      const response = await fetch("http://localhost:5000/api/form/contact",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
          },
          body:JSON.stringify(contact),

      });
      if(response.ok){
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        alert("Message Sent Successfully");
      }
    } catch (error) {
       alert("Message not send");
      console.log(error); 
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="/images/support.png"
              alt="we are always ready to help"
              width="400"
              height="400"
            />
          </div>
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  className="Msg-box"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="button">
                  submit
                </button>
              </div>
            </form>
          </section>
        </div>
        <section className="mb-3 full-screen-map">
          <iframe
            title="Evolve Marketing Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29922.13846223247!2d72.925184!3d20.3718656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cfd09f78eee5%3A0xe8cf2c1f694d1df1!2sEvolve%20Marketing%20%7C%20Digital%20Agency%20Vapi!5e0!3m2!1sen!2sin!4v1701430994294!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
