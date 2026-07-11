import Image from "next/image";

export default function Stories({ items = [] }) {
  return (
    <div className="_feed_inner_area _padd_t24 _padd_b24 _padd_r24 _padd_l24 _b_radious6">
      <div className="_left_inner_area_explore_item _left_inner_area_explore_content">
        <h4 className="_title5">Stories</h4>
        <span className="_left_inner_area_explore_link_txt">6</span>
      </div>

      <div className="_feed_inner_ppl_card">
        <div className="_feed_inner_ppl_card_area_list">
          {items.map((item) => (
            <div key={item.id} className="_feed_inner_ppl_card_area_item">
              <div className="_feed_inner_public_story">
                <div className="_feed_inner_public_story_image">
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={110}
                    height={140}
                    className="_public_story_img"
                  />
                </div>
                <div className="_feed_inner_public_mini">
                  <Image
                    src={item.avatar}
                    alt=""
                    width={28}
                    height={28}
                    className="_public_mini_img"
                  />
                </div>
                <div className="_feed_inner_pulic_story_txt">
                  <p className="_feed_inner_pulic_story_para">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
