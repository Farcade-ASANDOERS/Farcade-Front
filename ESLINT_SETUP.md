# ESLint 설정 파일 설명

이 문서는 프로젝트에서 사용하는 ESLint 설정에 대한 설명을 제공합니다. 이 설정 파일은 코드 품질을 유지하고 코드 스타일을 일관되게 적용하는 데 사용됩니다.

## 설정 항목

### `root`

- **설명**: 이 설정 파일이 최상위 설정 파일임을 지정합니다. 다른 상위 설정 파일을 무시하고 이 설정 파일을 기준으로 ESLint를 적용합니다.

### `env`

- **설명**: ESLint가 코드가 실행되는 환경을 이해하도록 도와줍니다. 환경 설정을 통해 ESLint는 특정 전역 변수를 미리 정의하고 해당 환경에 맞는 규칙을 적용합니다.
- **옵션**:
  - `browser: true`: 브라우저 환경에서 실행되는 코드로 간주합니다.
  - `es2020: true`: 최신 ECMAScript(ES2020) 기능을 사용할 수 있도록 설정합니다.

### `extends`

- **설명**: 기본적으로 사용할 린트 규칙을 정의합니다.
- **확장 규칙**:
  - `"eslint:recommended"`: ESLint의 추천 규칙을 사용합니다.
  - `"plugin:import/warnings"`: `eslint-plugin-import`의 규칙을 사용합니다.
  - `"plugin:react/jsx-runtime"`: `eslint-plugin-react`의 JSX 관련 규칙을 사용합니다.
  - `"plugin:jsx-a11y/recommended"`: `eslint-plugin-jsx-a11y`의 접근성 관련 규칙을 사용합니다.
  - `"plugin:react/recommended"`: `eslint-plugin-react`의 추천 규칙을 사용합니다.
  - `"plugin:react-hooks/recommended"`: `eslint-plugin-react-hooks`의 추천 규칙을 사용합니다.
  - `"plugin:prettier/recommended"`: `eslint-plugin-prettier`와 `eslint-config-prettier`의 규칙을 사용합니다.
  - `"prettier"`: **마지막으로 Prettier 설정을 작성합니다**. 규칙의 우선순위는 아래에 있는 항목이 더 높기 때문입니다.

### `ignorePatterns`

- **설명**: ESLint가 무시할 파일이나 디렉토리를 지정합니다.
- **옵션**:
  - `['dist', '.eslintrc.cjs']`: `dist` 디렉토리와 `.eslintrc.cjs` 파일을 무시합니다.

### `parserOptions`

- **설명**: 파서 옵션을 설정합니다.
- **옵션**:
  - `ecmaVersion: "latest"`: 최신 ECMAScript 버전을 사용하도록 설정합니다.
  - `sourceType: "module"`: ES 모듈을 사용할 수 있도록 설정합니다.

### `settings`

- **설명**: 추가적인 설정을 정의합니다.
- **옵션**:
  - `react.version: "18.2"`: React 관련 린트 규칙이 React 18.2 버전에 맞게 적용되도록 합니다.
  - `"import/resolver"`: ESLint가 모듈을 해석하는 방법을 지정하는 옵션입니다. 특히 상대 경로나 절대 경로를 포함한 모듈을 해석할 때 사용합니다.
    - `node.extensions`: ESLint가 해석할 파일 확장자를 지정합니다. 예: `.js`, `.jsx`, `.ts`, `.tsx`, `.css`.

### `plugins`

- **설명**: 추가 사용을 위해 설치한 플러그인들을 추가합니다.
- **플러그인**:
  - `"import"`
  - `"jsx-a11y"`
  - `"react"`
  - `"react-hooks"`
  - `"react-refresh"`
  - `"prettier"`
  - `"tailwindcss"`

### `rules`

- **설명**: 세부 린트 규칙을 정의합니다.
- **규칙**:
  - `"react/react-in-jsx-scope": "off"`: JSX 코드에서 React를 가져오지 않아도 오류가 발생하지 않도록 설정합니다.
  - `"prettier/prettier": "error"`: Prettier 규칙을 ESLint 오류로 간주하여 엄격하게 적용합니다.
  - `"arrow-body-style": "off"`: 화살표 함수에서 중괄호 사용 여부에 대한 규칙을 비활성화합니다.
  - `"prefer-arrow-callback": "off"`: 콜백 함수에서 화살표 함수를 선호하는 규칙을 비활성화합니다.
  - `"react/jsx-no-target-blank": "off"`: `target="_blank"` 속성을 가진 링크에 `rel="noopener noreferrer"`를 추가하지 않아도 되도록 설정합니다.
  - `"react-refresh/only-export-components": ["warn", { "allowConstantExport": true }]`: 경고를 발생시키는 규칙으로, 컴포넌트만 export 하도록 권장하며, 상수 export를 허용합니다.
  - `"no-unused-vars": "warn"`: 선언된 변수 중 사용되지 않는 변수가 있을 경우 경고를 표시합니다.
  - `"eqeqeq": ["error", "always"]`: 엄격한 일치 연산자(=== 및 !==)를 사용하도록 강제합니다.
  - `"tailwindcss/classnames-order": "warn"`: Tailwind CSS 클래스명을 특정 순서에 맞게 정렬하도록 권장합니다.
  - `"tailwindcss/no-custom-classname": "off"`: Tailwind CSS 클래스명 외에 커스텀 클래스명을 사용할 수 있도록 설정합니다.
