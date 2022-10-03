// https://www.terraform.io/docs/providers/cloudflare
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudflareProviderConfig {
  /**
  * Configure API client to always use a specific account. Alternatively, can be configured using the `CLOUDFLARE_ACCOUNT_ID` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare#account_id CloudflareProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * Configure the base path used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_BASE_PATH` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare#api_base_path CloudflareProvider#api_base_path}
  */
  readonly apiBasePath?: string;
  /**
  * Whether to print logs from the API client (using the default log library logger). Alternatively, can be configured using the `CLOUDFLARE_API_CLIENT_LOGGING` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare#api_client_logging CloudflareProvider#api_client_logging}
  */
  readonly apiClientLogging?: boolean | cdktf.IResolvable;
  /**
  * Configure the hostname used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_HOSTNAME` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare#api_hostname CloudflareProvider#api_hostname}
  */
  readonly apiHostname?: string;
  /**
  * The API key for operations. Alternatively, can be configured using the `CLOUDFLARE_API_KEY` environment variable. API keys are [now considered legacy by Cloudflare](https://developers.cloudflare.com/api/keys/#limitations), API tokens should be used instead. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare#api_key CloudflareProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The API Token for operations. Alternatively, can be configured using the `CLOUDFLARE_API_TOKEN` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare#api_token CloudflareProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * A special Cloudflare API key good for a restricted set of endpoints. Alternatively, can be configured using the `CLOUDFLARE_API_USER_SERVICE_KEY` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare#api_user_service_key CloudflareProvider#api_user_service_key}
  */
  readonly apiUserServiceKey?: string;
  /**
  * A registered Cloudflare email address. Alternatively, can be configured using the `CLOUDFLARE_EMAIL` environment variable. Required when using `api_key`. Conflicts with `api_token`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare#email CloudflareProvider#email}
  */
  readonly email?: string;
  /**
  * Maximum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MAX_BACKOFF` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare#max_backoff CloudflareProvider#max_backoff}
  */
  readonly maxBackoff?: number;
  /**
  * Minimum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MIN_BACKOFF` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare#min_backoff CloudflareProvider#min_backoff}
  */
  readonly minBackoff?: number;
  /**
  * Maximum number of retries to perform when an API request fails. Alternatively, can be configured using the `CLOUDFLARE_RETRIES` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare#retries CloudflareProvider#retries}
  */
  readonly retries?: number;
  /**
  * RPS limit to apply when making calls to the API. Alternatively, can be configured using the `CLOUDFLARE_RPS` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare#rps CloudflareProvider#rps}
  */
  readonly rps?: number;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare#alias CloudflareProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare cloudflare}
*/
export class CloudflareProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare cloudflare} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudflareProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudflareProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.24.0',
        providerVersionConstraint: '~> 3.14'
      },
      terraformProviderSource: 'cloudflare/cloudflare'
    });
    this._accountId = config.accountId;
    this._apiBasePath = config.apiBasePath;
    this._apiClientLogging = config.apiClientLogging;
    this._apiHostname = config.apiHostname;
    this._apiKey = config.apiKey;
    this._apiToken = config.apiToken;
    this._apiUserServiceKey = config.apiUserServiceKey;
    this._email = config.email;
    this._maxBackoff = config.maxBackoff;
    this._minBackoff = config.minBackoff;
    this._retries = config.retries;
    this._rps = config.rps;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this._accountId;
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // api_base_path - computed: false, optional: true, required: false
  private _apiBasePath?: string; 
  public get apiBasePath() {
    return this._apiBasePath;
  }
  public set apiBasePath(value: string | undefined) {
    this._apiBasePath = value;
  }
  public resetApiBasePath() {
    this._apiBasePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiBasePathInput() {
    return this._apiBasePath;
  }

  // api_client_logging - computed: false, optional: true, required: false
  private _apiClientLogging?: boolean | cdktf.IResolvable; 
  public get apiClientLogging() {
    return this._apiClientLogging;
  }
  public set apiClientLogging(value: boolean | cdktf.IResolvable | undefined) {
    this._apiClientLogging = value;
  }
  public resetApiClientLogging() {
    this._apiClientLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiClientLoggingInput() {
    return this._apiClientLogging;
  }

  // api_hostname - computed: false, optional: true, required: false
  private _apiHostname?: string; 
  public get apiHostname() {
    return this._apiHostname;
  }
  public set apiHostname(value: string | undefined) {
    this._apiHostname = value;
  }
  public resetApiHostname() {
    this._apiHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiHostnameInput() {
    return this._apiHostname;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // api_user_service_key - computed: false, optional: true, required: false
  private _apiUserServiceKey?: string; 
  public get apiUserServiceKey() {
    return this._apiUserServiceKey;
  }
  public set apiUserServiceKey(value: string | undefined) {
    this._apiUserServiceKey = value;
  }
  public resetApiUserServiceKey() {
    this._apiUserServiceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUserServiceKeyInput() {
    return this._apiUserServiceKey;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this._email;
  }
  public set email(value: string | undefined) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // max_backoff - computed: false, optional: true, required: false
  private _maxBackoff?: number; 
  public get maxBackoff() {
    return this._maxBackoff;
  }
  public set maxBackoff(value: number | undefined) {
    this._maxBackoff = value;
  }
  public resetMaxBackoff() {
    this._maxBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffInput() {
    return this._maxBackoff;
  }

  // min_backoff - computed: false, optional: true, required: false
  private _minBackoff?: number; 
  public get minBackoff() {
    return this._minBackoff;
  }
  public set minBackoff(value: number | undefined) {
    this._minBackoff = value;
  }
  public resetMinBackoff() {
    this._minBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackoffInput() {
    return this._minBackoff;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // rps - computed: false, optional: true, required: false
  private _rps?: number; 
  public get rps() {
    return this._rps;
  }
  public set rps(value: number | undefined) {
    this._rps = value;
  }
  public resetRps() {
    this._rps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpsInput() {
    return this._rps;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      api_base_path: cdktf.stringToTerraform(this._apiBasePath),
      api_client_logging: cdktf.booleanToTerraform(this._apiClientLogging),
      api_hostname: cdktf.stringToTerraform(this._apiHostname),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_token: cdktf.stringToTerraform(this._apiToken),
      api_user_service_key: cdktf.stringToTerraform(this._apiUserServiceKey),
      email: cdktf.stringToTerraform(this._email),
      max_backoff: cdktf.numberToTerraform(this._maxBackoff),
      min_backoff: cdktf.numberToTerraform(this._minBackoff),
      retries: cdktf.numberToTerraform(this._retries),
      rps: cdktf.numberToTerraform(this._rps),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
