import { useState } from "react";
import { fetchProfile, fetchRepos } from "../services/githubApi";

export function useGithub() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function searchUser(username) {
    setLoading(true);
    setError(null);
    setProfile(null);
    setRepos([]);

    try {
      const [profileData, reposData] = await Promise.all([
        fetchProfile(username),
        fetchRepos(username),
      ]);

      setProfile(profileData);
      setRepos(reposData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { profile, repos, loading, error, searchUser };
}
