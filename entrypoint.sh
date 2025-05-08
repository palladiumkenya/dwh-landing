#!/bin/sh

cat <<EOF > /app/public/runtime-config.js
window.RUNTIME_CONFIG = {
  NEXT_PUBLIC_NDW_LINK: "${NEXT_PUBLIC_NDW_LINK}"
};
EOF

exec npm start