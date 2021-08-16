import React from "react";
import SectionLayoutSingle from "../common/SectionLayoutSingle";
import blades from "../../../assets/stridsbergs/sawblades.png";

const StridsbergsMainPage = () => {
  return (
    <>
      <div className="container">
        <SectionLayoutSingle
          header="Kvarnstrands & Stridsbergs"
          text1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis at harum, ab, excepturi, numquam voluptates laudantium maxime debitis distinctio quae quasi adipisci exercitationem. Vitae esse exercitationem dolore nisi sequi dolores?"
          img1={blades}
          text2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore excepturi quod minus consequuntur natus sed doloribus earum rerum. Veniam perferendis nihil, et molestias laudantium hic molestiae enim eveniet consequatur rerum!
          Eum minus magnam error quibusdam ullam enim nemo doloremque quisquam, deleniti assumenda laboriosam soluta. Unde eum, dolorem reiciendis asperiores, magni commodi laborum veniam ab iste sequi in ex placeat similique?"
        />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
        }
      `}</style>
    </>
  );
};

export default StridsbergsMainPage;
