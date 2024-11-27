// https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustDevicePostureIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#account_id ZeroTrustDevicePostureIntegration#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#id ZeroTrustDevicePostureIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#identifier ZeroTrustDevicePostureIntegration#identifier}
  */
  readonly identifier?: string;
  /**
  * Indicates the frequency with which to poll the third-party API. Must be in the format `1h` or `30m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#interval ZeroTrustDevicePostureIntegration#interval}
  */
  readonly interval?: string;
  /**
  * Name of the device posture integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#name ZeroTrustDevicePostureIntegration#name}
  */
  readonly name: string;
  /**
  * The device posture integration type. Available values: `workspace_one`, `uptycs`, `crowdstrike_s2s`, `intune`, `kolide`, `sentinelone_s2s`, `tanium_s2s`, `custom_s2s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#type ZeroTrustDevicePostureIntegration#type}
  */
  readonly type: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#config ZeroTrustDevicePostureIntegration#config}
  */
  readonly config?: ZeroTrustDevicePostureIntegrationConfigA[] | cdktf.IResolvable;
}
export interface ZeroTrustDevicePostureIntegrationConfigA {
  /**
  * The Access client ID to be used as the `Cf-Access-Client-ID` header when making a request to the `api_url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#access_client_id ZeroTrustDevicePostureIntegration#access_client_id}
  */
  readonly accessClientId?: string;
  /**
  * The Access client secret to be used as the `Cf-Access-Client-Secret` header when making a request to the `api_url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#access_client_secret ZeroTrustDevicePostureIntegration#access_client_secret}
  */
  readonly accessClientSecret?: string;
  /**
  * The third-party API's URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#api_url ZeroTrustDevicePostureIntegration#api_url}
  */
  readonly apiUrl?: string;
  /**
  * The third-party authorization API URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#auth_url ZeroTrustDevicePostureIntegration#auth_url}
  */
  readonly authUrl?: string;
  /**
  * The client identifier for authenticating API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#client_id ZeroTrustDevicePostureIntegration#client_id}
  */
  readonly clientId?: string;
  /**
  * The client key for authenticating API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#client_key ZeroTrustDevicePostureIntegration#client_key}
  */
  readonly clientKey?: string;
  /**
  * The client secret for authenticating API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#client_secret ZeroTrustDevicePostureIntegration#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The customer identifier for authenticating API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#customer_id ZeroTrustDevicePostureIntegration#customer_id}
  */
  readonly customerId?: string;
}

export function zeroTrustDevicePostureIntegrationConfigAToTerraform(struct?: ZeroTrustDevicePostureIntegrationConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_client_id: cdktf.stringToTerraform(struct!.accessClientId),
    access_client_secret: cdktf.stringToTerraform(struct!.accessClientSecret),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    customer_id: cdktf.stringToTerraform(struct!.customerId),
  }
}


export function zeroTrustDevicePostureIntegrationConfigAToHclTerraform(struct?: ZeroTrustDevicePostureIntegrationConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_client_id: {
      value: cdktf.stringToHclTerraform(struct!.accessClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.accessClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_id: {
      value: cdktf.stringToHclTerraform(struct!.customerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDevicePostureIntegrationConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZeroTrustDevicePostureIntegrationConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessClientId = this._accessClientId;
    }
    if (this._accessClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessClientSecret = this._accessClientSecret;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._customerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerId = this._customerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDevicePostureIntegrationConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessClientId = undefined;
      this._accessClientSecret = undefined;
      this._apiUrl = undefined;
      this._authUrl = undefined;
      this._clientId = undefined;
      this._clientKey = undefined;
      this._clientSecret = undefined;
      this._customerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessClientId = value.accessClientId;
      this._accessClientSecret = value.accessClientSecret;
      this._apiUrl = value.apiUrl;
      this._authUrl = value.authUrl;
      this._clientId = value.clientId;
      this._clientKey = value.clientKey;
      this._clientSecret = value.clientSecret;
      this._customerId = value.customerId;
    }
  }

  // access_client_id - computed: false, optional: true, required: false
  private _accessClientId?: string; 
  public get accessClientId() {
    return this.getStringAttribute('access_client_id');
  }
  public set accessClientId(value: string) {
    this._accessClientId = value;
  }
  public resetAccessClientId() {
    this._accessClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessClientIdInput() {
    return this._accessClientId;
  }

  // access_client_secret - computed: false, optional: true, required: false
  private _accessClientSecret?: string; 
  public get accessClientSecret() {
    return this.getStringAttribute('access_client_secret');
  }
  public set accessClientSecret(value: string) {
    this._accessClientSecret = value;
  }
  public resetAccessClientSecret() {
    this._accessClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessClientSecretInput() {
    return this._accessClientSecret;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // auth_url - computed: false, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // customer_id - computed: false, optional: true, required: false
  private _customerId?: string; 
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }
  public set customerId(value: string) {
    this._customerId = value;
  }
  public resetCustomerId() {
    this._customerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId;
  }
}

export class ZeroTrustDevicePostureIntegrationConfigAList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustDevicePostureIntegrationConfigA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZeroTrustDevicePostureIntegrationConfigAOutputReference {
    return new ZeroTrustDevicePostureIntegrationConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration}
*/
export class ZeroTrustDevicePostureIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_device_posture_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustDevicePostureIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustDevicePostureIntegration to import
  * @param importFromId The id of the existing ZeroTrustDevicePostureIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustDevicePostureIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_posture_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustDevicePostureIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustDevicePostureIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_device_posture_integration',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.47.0',
        providerVersionConstraint: '~> 4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._id = config.id;
    this._identifier = config.identifier;
    this._interval = config.interval;
    this._name = config.name;
    this._type = config.type;
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // config - computed: false, optional: true, required: false
  private _config = new ZeroTrustDevicePostureIntegrationConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: ZeroTrustDevicePostureIntegrationConfigA[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      interval: cdktf.stringToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      config: cdktf.listMapper(zeroTrustDevicePostureIntegrationConfigAToTerraform, true)(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdktf.listMapperHcl(zeroTrustDevicePostureIntegrationConfigAToHclTerraform, true)(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustDevicePostureIntegrationConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
