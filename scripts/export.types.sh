declare -a directories=(
  "./v_core_web_worker/src/*.js"
  "./ws_events/src/*.js"
  "./utilities/src/**/*.js"
  "./Scriptrix/src/*"
  "./ApexConsoleX/src/*"
  "./v_cli_parser/src/*.js"
)

for dir in "${directories[@]}"; do
  echo $PWD
  echo $dir
  npx -p typescript tsc "$dir" --declaration --allowJs --emitDeclarationOnly --outFile "${dir%/*}/types/index.d.ts"
done
