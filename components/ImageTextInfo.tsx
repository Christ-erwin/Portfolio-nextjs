

type ImageTextProps = {
  imageSrc: string;
  text: string;
};

export default function ImageTextInfo({ imageSrc, text }: ImageTextProps) {
  return (
    <div className="max-w-md 2xl:max-w-xl rounded-lg  bg-[#F2F8FC] flex 
     h-[55px] items-center px-7 shadow">
      <img src={imageSrc} alt="icon" className="w-8 h-8 mr-5" />
      <span className="text-gray-700 text-lg">{text}</span>
    </div>
  );
}