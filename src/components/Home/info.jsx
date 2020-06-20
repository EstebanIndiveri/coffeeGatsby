import React from 'react';
import {Link} from 'gatsby';
import Title from '../Global/Title';

const Info = () => {
    return ( 
        <section className="py-5"> 
            <div className="container">
                <Title title="our story"/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio possimus ab doloremque repudiandae atque voluptatibus autem, perferendis facilis magni. Dolore soluta eos aut atque blanditiis numquam officiis esse rem impedit, sapiente veniam totam repellat corrupti? Corporis dignissimos nam ducimus ex, error quisquam quaerat fugit placeat adipisci molestias assumenda mollitia consectetur.
                        </p>
                        <Link to="/about">
                            <button className="btn text-uppercase btn-yellow">About Page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Info;