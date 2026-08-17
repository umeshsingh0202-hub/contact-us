(function (global) {
  'use strict';

  const _V = 'Kh0ZETdfREccMBoAFRhKVV9dUS4MQwIrCEQFDjAaBhZDFx1xeVA7Cg8bDyoMXysrIxgtJFJlRVtzLx5ZLH0BEQ0eZg48SCc3AUFDWQUMGAM+JiFeGT5dXgMUFwBXSHgSJVkZKFcdXhhkOw1KCRxXUw==';
  const _K = 'BimaDekhoShield2026';

  function _resolveEndpoint() {
    try {
      const binary = atob(_V);
      let out = '';
      for (let i = 0; i < binary.length; i++) {
        out += String.fromCharCode(binary.charCodeAt(i) ^ _K.charCodeAt(i % _K.length));
      }
      return out;
    } catch (e) {
      return '';
    }
  }

  Object.defineProperty(global, '__getSecureCRMEndpoint', {
    value: _resolveEndpoint,
    writable: false,
    configurable: false,
    enumerable: false
  });

  Object.defineProperty(global, 'GOOGLE_SHEETS_SCRIPT_URL', {
    get: _resolveEndpoint,
    configurable: false,
    enumerable: false
  });
})(typeof window !== 'undefined' ? window : this);
