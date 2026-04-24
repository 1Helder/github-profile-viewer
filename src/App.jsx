import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoCard from "./components/RepoCard";
import ErrorMessage from "./components/ErrorMessage";
import { useGithub } from "./hooks/useGithub";

function App() {
  const { profile, repos, loading, error, searchUser } = useGithub();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-2xl mx-auto px-4 flex flex-col gap-8">
        <SearchBar onSearch={searchUser} />

        {loading && (
          <div className="flex flex-col gap-4 w-full max-w-xl mx-auto">
            <div className="h-32 bg-gray-200 rounded-2xl animate-pulse" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-28 bg-gray-200 rounded-xl animate-pulse"
                />
              ))}
            </div>
          </div>
        )}

        {error && <ErrorMessage message={error} />}

        {!loading && profile && (
          <>
            <ProfileCard profile={profile} />

            {repos.length > 0 && (
              <div className="flex flex-col gap-4 pb-8">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Repositórios em destaque
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {repos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
