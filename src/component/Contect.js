import React from 'react'

export default function Contect() {
  return (
    <div>
        <section className="contact_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Contact Us
        </h2>
      </div>
      <div className="">
        <div className="">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="contact-form">
                <form action="">
                  <div>
                    <input type="text" placeholder="Full Name " />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" />
                  </div>
                  <div>
                    <input type="text" placeholder="Message" className="input_message" />
                  </div>
                  <div className="d-flex justify-content-center">
                  
                    <button type="sucess" className="btn_on-hover">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
