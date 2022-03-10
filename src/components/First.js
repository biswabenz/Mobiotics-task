import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
import { useState } from 'react';

function First() {
    const [show, setShow] = useState(true)
    return (
        <div className="task" >
            <h1>ASSIGNMENT TASK</h1>
            {

                show ? <Grid container >

                    <Grid item md={3} >
                        <div class="card " >
                            {/* used images */}


                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">IMAGE</h5>
                                <div className="flower__left block">
                                    <img src="images/golconda fort.jpg" class="card-img-top" />
                                </div>


                            </div>
                        </div>
                    </Grid>

                    <Grid item md={3}>
                        <div className="card  text-center" >



                            <div class="card-body " style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">IMAGE</h5>
                                <div className="flower__left block">
                                    <img src="images/tacking.jpg" class="card-img-top" height={153} width={250} />
                                </div>


                            </div>
                        </div>
                    </Grid>

                    <Grid item md={3}>
                        <div class="card " >
                            {/* used images */}


                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">IMAGE</h5>
                                <div className="flower__left block">
                                    <img src="images/kolkotta.jpg" class="card-img-top" height={153} width={250} />
                                </div>

                            </div>
                        </div>
                    </Grid>
                    <Grid item md={3}>
                        <div class="card " >
                            {/* used images */}


                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">IMAGE</h5>
                                <div className="flower__left block">
                                    <img src="images/vellore_fort.jpg" class="card-img-top" height={153} width={250} />

                                </div>

                            </div>
                        </div>
                    </Grid>

                    <Grid item md={3}>
                        <div class="card ">
                            {/* used images */}


                            <div class="card-body" style={{ width: "300px", height: "180px" }}>
                                <h5 class="card-title">TITLE</h5>
                                <h1 style={{
                                    // fontSize: "1rem",
                                    fontFamily: "sans-serif",
                                    color: "black",
                                    fontSize: "20px",
                                    background: "#f7d679",
                                    margin: "20px"


                                }}>Golconda Fort, located in Hyderabad.</h1>



                            </div>
                        </div>



                    </Grid>

                    <Grid item md={3}>
                        <div class="card ">
                            {/* used images */}


                            <div class="card-body" style={{ width: "300px", height: "180px" }}>
                                <h5 class="card-title">TITLE</h5>
                                <h1 style={{
                                    // fontSize: "1rem",
                                    fontFamily: "sans-serif",
                                    color: "black",
                                    fontSize: "20px",
                                    background: "#f7d679",
                                    margin: "20px"


                                }}>Trekking is recreational activity.</h1>



                            </div>
                        </div>



                    </Grid>

                    <Grid item md={3}>
                        <div class="card ">
                            {/* used images */}


                            <div class="card-body" style={{ width: "300px", height: "180px" }}>
                            <h5 class="card-title">TITLE</h5>
                                <h1 style={{
                                    // fontSize: "1rem",
                                    fontFamily: "sans-serif",
                                    color: "black",
                                    fontSize: "20px",
                                    background: "#f7d679",
                                    margin: "20px"


                                }}>Kolkata is the capital of India's West Bengal state. </h1>


                            </div>
                        </div>



                    </Grid>

                    <Grid item md={3}>
                        <div class="card ">
                            {/* used images */}


                            <div class="card-body" style={{ width: "300px", height: "180px" }}>
                            <h5 class="card-title">TITLE</h5>
                                <h1 style={{
                                    // fontSize: "1rem",
                                    fontFamily: "sans-serif",
                                    color: "black",
                                    fontSize: "20px",
                                    background: "#f7d679",
                                    margin: "20px"


                                }}>Vellore Fort is a large 16th-century.</h1>

                            </div>
                        </div>



                    </Grid>

                    <Grid item md={3}>
                        <div class="card ">
                            {/* used description */}
                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">DESCRIPTION</h5>
                                <p class="card-text" style={{ background: "#ebf779" }} >Golconda Fort, located in Hyderabad, Telangana, India. Because of the vicinity of diamond mines, especially Kollur Mine, Golconda flourished as a trade centre of large diamonds, known as the Golconda Diamonds.</p>

                            </div>
                        </div>





                    </Grid>

                    <Grid item md={3}>
                        <div class="card ">
                            {/* used description */}
                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">DESCRIPTION</h5>
                                <p class="card-text" style={{ background: "#ebf779" }} >Trekking is recreational activity that involves covering any specified journey on foot. This is mostly done in rural areas and rugged regions. Trekking is often done in combination with backpacking and rock climbing</p>

                            </div>
                        </div>





                    </Grid>

                    <Grid item md={3}>
                        <div class="card ">
                            {/* used description */}
                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">DESCRIPTION</h5>
                                <p class="card-text" style={{ background: "#ebf779" }} >Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals.</p>

                            </div>
                        </div>





                    </Grid>

                    <Grid item md={3}>
                        <div class="card ">
                            {/* used description */}
                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">DESCRIPTION</h5>
                                <p class="card-text" style={{ background: "#ebf779" }} >he First Mutiny against the British in India broke out in Vellore Fort (1806 – Sippoy Kalagam)Tippu Mahal, Hyder Mahal, Condy Mahal, Badhusha Mahal and the Begam Mahal in side the Fort.The fort at Vellore is one of the great attractions in the District.</p>

                            </div>
                        </div>





                    </Grid>
                    <Grid item md={3}>

                        <div class="card ">
                            {/* used  video tag */}
                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">VIDEO</h5>
                                {/* used shakaplayer library */}
                                <ShakaPlayer autoPlay src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" style={{ width: "280px", height: "150px" }} />;
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={3}>

                        <div class="card ">
                            {/* used  video tag */}
                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">VIDEO</h5>
                                {/* used shakaplayer library */}
                                <ShakaPlayer autoPlay src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" style={{ width: "280px", height: "150px" }} />;
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={3}>

                        <div class="card ">
                            {/* used  video tag */}
                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">VIDEO</h5>
                                {/* used shakaplayer library */}
                                <ShakaPlayer autoPlay src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" style={{ width: "280px", height: "150px" }} />;
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={3}>

                        <div class="card ">
                            {/* used  video tag */}
                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">VIDEO</h5>
                                {/* used shakaplayer library */}
                                <ShakaPlayer autoPlay src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" style={{ width: "280px", height: "150px" }} />;
                            </div>
                        </div>
                    </Grid>

                </Grid> : null
            }

            <div class="btn">

                <button onClick={() => setShow(true)} className="button1">Show In</button>
                <button onClick={() => setShow(false)}>Show Out</button>
            </div>




        </div>
    )

}

export default First;



