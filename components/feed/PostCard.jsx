import Image from "next/image";

export default function PostCard({ post }) {
  return (
    <article className="_feed_inner_timeline_post_area _padd_t24 _padd_b24 _padd_r24 _padd_l24 _b_radious6">
      <div className="_feed_inner_timeline_post_top">
        <div className="_feed_inner_timeline_post_box">
          <div className="_feed_inner_timeline_post_box_image">
            <Image
              src={post.avatar}
              alt={post.author}
              width={44}
              height={44}
              className="_post_img"
            />
          </div>
          <div>
            <h3 className="_feed_inner_timeline_post_box_title">{post.author}</h3>
            <p className="_feed_inner_timeline_post_box_para">{post.time}</p>
          </div>
        </div>

        <button type="button" className="_feed_timeline_post_dropdown_link">
          •••
        </button>
      </div>

      <h4 className="_feed_inner_timeline_post_title">{post.content}</h4>

      {post.image && (
        <div className="_feed_inner_timeline_image">
          <Image
            src={post.image}
            alt=""
            width={900}
            height={520}
            className="_time_img"
          />
        </div>
      )}

      <div className="_feed_inner_timeline_total_reacts">
        <div className="_feed_inner_timeline_total_reacts_txt">
          <div className="_feed_inner_timeline_total_reacts_image">
            <Image
              src="/assets/images/people1.png"
              alt=""
              width={32}
              height={32}
              className="_react_img1"
            />
            <Image
              src="/assets/images/people2.png"
              alt=""
              width={32}
              height={32}
              className="_react_img"
            />
            <Image
              src="/assets/images/people3.png"
              alt=""
              width={32}
              height={32}
              className="_react_img"
            />
          </div>
          <p className="_feed_inner_timline_para">
            <span>{post.likes}</span> likes and <span>{post.comments}</span>{" "}
            comments
          </p>
        </div>
        <div className="_feed_inner_timeline_total_reacts_para1">
          <span>View all</span>
        </div>
      </div>

      <div className="_feed_inner_timeline_reaction">
        <button type="button" className="_feed_inner_timeline_reaction_link _feed_reaction">
          Like
        </button>
        <button type="button" className="_feed_inner_timeline_reaction_link _feed_reaction">
          Comment
        </button>
        <button type="button" className="_feed_inner_timeline_reaction_link _feed_reaction">
          Share
        </button>
      </div>

      <div className="_feed_inner_timeline_cooment_area">
        <div className="_feed_inner_comment_box">
          <form className="_feed_inner_comment_box_form">
            <div className="_feed_inner_comment_box_content">
              <div className="_feed_inner_comment_box_content_image">
                <Image
                  src="/assets/images/comment_img.png"
                  alt=""
                  width={26}
                  height={26}
                  className="_comment_img"
                />
              </div>
              <div className="_feed_inner_comment_box_content_txt">
                <textarea
                  className="form-control _comment_textarea"
                  placeholder="Write a comment"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
}
