const e={Date:/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/,ShortText:/^.{1,40}$/,LongText:/^.{1,500}$/};function i(t){return t==null||t===""}function n(t){return!i(t)}function r(t){return typeof t=="number"&&isFinite(t)&&t>=0&&t<=100}function s(t){return typeof t=="number"&&isFinite(t)&&t>0&&t<999999999999999}function o(t){return n(t)&&e.ShortText.test(t)}function d(t){return n(t)&&e.Date.test(t)}function f(t){return n(t)&&e.ShortText.test(t)}export{s as a,n as b,f as c,o as d,d as e,r as i};
