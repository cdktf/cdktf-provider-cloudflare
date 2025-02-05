/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudflareProviderConfig {
  /**
  * Configure the base path used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_BASE_PATH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#api_base_path CloudflareProvider#api_base_path}
  */
  readonly apiBasePath?: string;
  /**
  * Whether to print logs from the API client (using the default log library logger). Alternatively, can be configured using the `CLOUDFLARE_API_CLIENT_LOGGING` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#api_client_logging CloudflareProvider#api_client_logging}
  */
  readonly apiClientLogging?: boolean | cdktf.IResolvable;
  /**
  * Configure the hostname used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_HOSTNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#api_hostname CloudflareProvider#api_hostname}
  */
  readonly apiHostname?: string;
  /**
  * The API key for operations. Alternatively, can be configured using the `CLOUDFLARE_API_KEY` environment variable. API keys are [now considered legacy by Cloudflare](https://developers.cloudflare.com/fundamentals/api/get-started/keys/#limitations), API tokens should be used instead. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#api_key CloudflareProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The API Token for operations. Alternatively, can be configured using the `CLOUDFLARE_API_TOKEN` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#api_token CloudflareProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * A special Cloudflare API key good for a restricted set of endpoints. Alternatively, can be configured using the `CLOUDFLARE_API_USER_SERVICE_KEY` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#api_user_service_key CloudflareProvider#api_user_service_key}
  */
  readonly apiUserServiceKey?: string;
  /**
  * A registered Cloudflare email address. Alternatively, can be configured using the `CLOUDFLARE_EMAIL` environment variable. Required when using `api_key`. Conflicts with `api_token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#email CloudflareProvider#email}
  */
  readonly email?: string;
  /**
  * Maximum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MAX_BACKOFF` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#max_backoff CloudflareProvider#max_backoff}
  */
  readonly maxBackoff?: number;
  /**
  * Minimum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MIN_BACKOFF` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#min_backoff CloudflareProvider#min_backoff}
  */
  readonly minBackoff?: number;
  /**
  * Maximum number of retries to perform when an API request fails. Alternatively, can be configured using the `CLOUDFLARE_RETRIES` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#retries CloudflareProvider#retries}
  */
  readonly retries?: number;
  /**
  * RPS limit to apply when making calls to the API. Alternatively, can be configured using the `CLOUDFLARE_RPS` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#rps CloudflareProvider#rps}
  */
  readonly rps?: number;
  /**
  * A value to append to the HTTP User Agent for all API calls. This value is not something most users need to modify however, if you are using a non-standard provider or operator configuration, this is recommended to assist in uniquely identifying your traffic. **Setting this value will remove the Terraform version from the HTTP User Agent string and may have unintended consequences**. Alternatively, can be configured using the `CLOUDFLARE_USER_AGENT_OPERATOR_SUFFIX` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#user_agent_operator_suffix CloudflareProvider#user_agent_operator_suffix}
  */
  readonly userAgentOperatorSuffix?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#alias CloudflareProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs cloudflare}
*/
export class CloudflareProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudflareProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudflareProvider to import
  * @param importFromId The id of the existing CloudflareProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudflareProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs cloudflare} Resource
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
        providerVersion: '4.52.0',
        providerVersionConstraint: '~> 4.3'
      },
      terraformProviderSource: 'cloudflare/cloudflare'
    });
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
    this._userAgentOperatorSuffix = config.userAgentOperatorSuffix;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // user_agent_operator_suffix - computed: false, optional: true, required: false
  private _userAgentOperatorSuffix?: string; 
  public get userAgentOperatorSuffix() {
    return this._userAgentOperatorSuffix;
  }
  public set userAgentOperatorSuffix(value: string | undefined) {
    this._userAgentOperatorSuffix = value;
  }
  public resetUserAgentOperatorSuffix() {
    this._userAgentOperatorSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentOperatorSuffixInput() {
    return this._userAgentOperatorSuffix;
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
      user_agent_operator_suffix: cdktf.stringToTerraform(this._userAgentOperatorSuffix),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_base_path: {
        value: cdktf.stringToHclTerraform(this._apiBasePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_client_logging: {
        value: cdktf.booleanToHclTerraform(this._apiClientLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_hostname: {
        value: cdktf.stringToHclTerraform(this._apiHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_user_service_key: {
        value: cdktf.stringToHclTerraform(this._apiUserServiceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_backoff: {
        value: cdktf.numberToHclTerraform(this._maxBackoff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_backoff: {
        value: cdktf.numberToHclTerraform(this._minBackoff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rps: {
        value: cdktf.numberToHclTerraform(this._rps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_agent_operator_suffix: {
        value: cdktf.stringToHclTerraform(this._userAgentOperatorSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
