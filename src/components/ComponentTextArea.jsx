export default function ComponentTextArea({ brownText, blackText }) {
  return (
    <div className="flex items-center justify-center mt-16 mb-12">
      <p className="title relative text-[22px] flex items-center justify-center gap-1 font-iranSansMedium ">
        <span className="text-brown-200">{brownText}</span>
        {blackText}
      </p>
    </div>
  );
}
