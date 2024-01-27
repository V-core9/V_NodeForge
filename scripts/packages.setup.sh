declare -a repositories=(
  "x-powered-by-random"
  "v_is_empty_value"
  "v_core_timers"
  "v_core_react_toolkit"
  "v_core_cache"
  "v_rifier"
  "v_shortkeys"
  "v_scrolls"
  "v_to_md5"
  "v_to_sha256"
)

for repo in "${repositories[@]}"; do
  echo $PWD
  echo $repo
  git clone https://github.com/V-core9/$repo.git packages/$repo
done
