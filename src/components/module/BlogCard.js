import Tag from "@/module/Tag";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCalendarMonth } from "react-icons/md";

function BlogCard({ data }) {
  return (
    <div className="w-[390px] h-fit">
      <div
        className="relative w-[386px] h-[253px]"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="absolute top-3 right-2 flex flex-wrap gap-3">
          {data.tag.map((tag, tagIndex) => (
            <Tag key={tagIndex} text={tag} />
          ))}
        </div>
      </div>
      <div className="flex justify-start py-3 gap-14">
        <div className="flex items-center justify-center gap-1">
          <CgProfile className="text-main w-[14px] h-[18px]" />
          <p className="text-[#888888] text-xs font-light">
            منتشر کننده&nbsp;
            <span className="text-black text-sm font-normal">
              {data.publisher}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <MdOutlineCalendarMonth className="text-main w-[14px] h-[18px]" />
          <p className="text-[#888888] text-xs font-light">
            تاریخ&nbsp;
            <span className="text-black text-sm font-normal">
              {data.publishDate}
            </span>
          </p>
        </div>
      </div>
      <Link href="blog">
        <h3 className="text-lg font-semibold w-[340px]">{data.title}</h3>
      </Link>
      <p className="text-sm font-normal text-[#888888] w-[320px]">
        {data.description}
      </p>
    </div>
  );
}

export default BlogCard;
