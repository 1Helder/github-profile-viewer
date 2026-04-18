const ProfileCard = ({ profile }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full max-w-xl mx-auto">
      <img
        src={profile.avatar_url}
        alt={profile.login}
        className="w-24 h-24 rounded-full mx-auto sm:mx-0"
      />

      <div className="flex flex-col gap-2 text-center sm:text-left">
        <h2 className="text-xl font-semibold text-gray-900">
          {profile.name || profile.login}
        </h2>

        <p className="text-gray-500 text-sm">@{profile.login}</p>

        {profile.bio && <p className="text-gray-700 text-sm">{profile.bio}</p>}

        <div className="flex justify-center sm:justify-start gap-4 mt-2 text-sm">
          <span className="text-gray-700">
            <strong>{profile.followers}</strong> seguidores
          </span>
          <span className="text-gray-700">
            <strong>{profile.following}</strong> seguindo
          </span>
          <span className="text-gray-700">
            <strong>{profile.public_repos}</strong> repos
          </span>
        </div>

        {profile.location && (
          <p className="text-gray-500 text-sm">📍 {profile.location}</p>
        )}

        {profile.html_url && (
          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline text-sm w-fit mx-auto sm:mx-0"
          >
            Ver perfil no GitHub →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
