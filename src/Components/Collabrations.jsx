import React from "react";

const Collabrations = () => {

  const userReview = [
    {
      id: 1,
      name: "Arjun Mehta",
      reviews:
        "A rare engineer who understands business goals. The Edge Functions we implemented are handling 50k+ daily calls without a hitch.",
      designation: "CTO, Webiz",
    },
    {
      id: 2,
      name: "Elena Rodriguez",
      reviews:
        "The dashboard he designed is hands down the best internal tool we've ever used. Clean, intuitive, and incredibly fast.",
      designation: "VP Product, Nexus",
    },
    {
      id: 3,
      name: "Sarah Jenkins",
      reviews:
        "Cibirajan's ability to translate complex logic into seamless UI is unmatched. He didn't just build the app; he refined our entire product strategy.",
      designation: "CEO, BloomCell",
    },
    {
      id: 4,
      name: "Chen Wei",
      reviews:
        "From design to deployment, the process was seamless. Cibirajan takes ownership of everything he touches.",
      designation: "Lead Engineer, FlowOps",
    },
  ];

  return (
    <div className="collab">

      {/* Header */}
      <p className="collab-tag">COLLABRATIONS</p>
      <h1 className="collab-title">Our Happy Customers</h1>
      <p className="collab-sub">
        Real feedback from teams I've helped scale and succeed.
      </p>

      {/* Carousel */}
      <div className="collab-slider">
        <div className="collab-track">

          {/* Duplicate array for infinite effect */}
          {[...userReview, ...userReview].map((item, index) => (
            <div className="review-card" key={index}>

              <p className="review-text">“{item.reviews}”</p>

              <div className="reviewer">
                <div className="avatar">{item.name[0]}</div>

                <div>
                  <p className="name">{item.name}</p>
                  <p className="designation">{item.designation}</p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Collabrations;