/**
 * Created by surajjha on 20/12/17.
 */

export default class GenericUtils {
	async invoker(prom) {
		try {
			const result = await prom;
			return ({
				err: null,
				result: result
			});
		} catch (err) {
			return ({
				err: err,
				result: null
			});
		}
	}
}