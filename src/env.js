let baseURL;

switch (process.env.NODE_ENV) {
	case 'development':
		baseURL = 'http://dev-mall/api'; // 测试环境地址
		break;
	case 'production':
		baseURL = 'http://mall-pre/api';
		break;
	case 'test':
		baseURL = 'http://test-mall-pre/api';
		break;
	default:
		baseURL = 'http://mall-pre/api';
}

export default {baseURL};