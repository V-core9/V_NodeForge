import vCoreWebWorkerBundleConfig from './v_core_web_worker/rollup.config'
import utilitiesConfig from './utilities/rollup.config'
import wsEventsConfig from './ws_events/rollup.config'

const libsBuildConfigs = [wsEventsConfig, utilitiesConfig, vCoreWebWorkerBundleConfig]

export default libsBuildConfigs
