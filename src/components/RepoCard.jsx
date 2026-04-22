const RepoCard = ({ repo }) =>{
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-2 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-blue-600 truncate">
          {repo.name}
        </h3>
        <span className="flex items-center gap-1 text-xs text-gray-500 shrink-0">
          ⭐ {repo.stargazers_count}
        </span>
      </div>

      {repo.description && (
        <p className="text-xs text-gray-500 line-clamp-2">
          {repo.description}
        </p>
      )}

      <div className="flex items-center gap-3 mt-auto text-xs text-gray-400">
        {repo.language && (
          <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
            {repo.language}
          </span>
        )}
        <span>🍴 {repo.forks_count}</span>
      </div>
    </a>
  )
}

export default RepoCard