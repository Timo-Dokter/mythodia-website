# flake8: noqa
import os

import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

import mythodia
from .base import *

# ==============================================================================
# CORE SETTINGS
# ==============================================================================


# ==============================================================================
# SECURITY SETTINGS
# ==============================================================================

CSRF_COOKIE_SECURE = True
CSRF_COOKIE_HTTPONLY = True

SECURE_HSTS_SECONDS = 60 * 60 * 24 * 7 * 52  # one year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_SSL_REDIRECT = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")

SESSION_COOKIE_SECURE = True

CSRF_TRUSTED_ORIGINS = ["https://dutchband.mmc-server.nl"]


# ==============================================================================
# EMAIL SETTINGS
# ==============================================================================
# EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
# EMAIL_HOST = "mail.mmcitsolutions.nl"
# EMAIL_PORT = 465
# EMAIL_HOST_PASSWORD = config("EMAIL_HOST_PASSWORD", default="")
# EMAIL_USE_TLS = False
# EMAIL_USE_SSL = True

# ==============================================================================
# THIRD-PARTY APPS SETTINGS
# ==============================================================================

# AWS_ACCESS_KEY_ID = config("AWS_ACCESS_KEY_ID", default="")  # Change this
# AWS_SECRET_ACCESS_KEY = config("AWS_SECRET_ACCESS_KEY", default="")  # Change this
# AWS_STORAGE_BUCKET_NAME = "mmc-static-files"
# AWS_S3_ENDPOINT_URL = "https://ams3.digitaloceanspaces.com"
# AWS_LOCATION = "https://mmc-static-files.ams3.digitaloceanspaces.com"

DEFAULT_FILE_STORAGE = "mythodia.cdn.backends.MediaRootS3Boto3Storage"
STATICFILES_STORAGE = "mythodia.cdn.backends.StaticRootS3Boto3Storage"

sentry_sdk.init(
    dsn=config("SENTRY_DSN", default=""),
    environment=SIMPLE_ENVIRONMENT,
    release="mythodia@%s" % mythodia.__version__,
    integrations=[DjangoIntegration()],
)
