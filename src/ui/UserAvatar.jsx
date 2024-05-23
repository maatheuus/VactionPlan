import imageProfile from "../assets/default-user.jpg";

function UserAvatar({
  name,
  srcImage = imageProfile,
  className,
  classSpan,
  children,
}) {
  return (
    <div className={`text-lg flex ${className}`}>
      <img
        src={srcImage}
        alt="photo user"
        className="rounded-full w-11 object-cover object-center block"
      />
      {name && (
        <span className={`text-md font-semibold text-gray-50 ${classSpan}`}>
          {name}
        </span>
      )}
      {children}
    </div>
  );
}

export default UserAvatar;
