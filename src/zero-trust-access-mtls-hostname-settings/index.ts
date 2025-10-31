/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_access_mtls_hostname_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustAccessMtlsHostnameSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_access_mtls_hostname_settings#account_id ZeroTrustAccessMtlsHostnameSettings#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_access_mtls_hostname_settings#settings ZeroTrustAccessMtlsHostnameSettings#settings}
  */
  readonly settings: ZeroTrustAccessMtlsHostnameSettingsSettings[] | cdktf.IResolvable;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_access_mtls_hostname_settings#zone_id ZeroTrustAccessMtlsHostnameSettings#zone_id}
  */
  readonly zoneId?: string;
}
export interface ZeroTrustAccessMtlsHostnameSettingsSettings {
  /**
  * Request client certificates for this hostname in China. Can only be set to true if this zone is china network enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_access_mtls_hostname_settings#china_network ZeroTrustAccessMtlsHostnameSettings#china_network}
  */
  readonly chinaNetwork: boolean | cdktf.IResolvable;
  /**
  * Client Certificate Forwarding is a feature that takes the client cert provided by the eyeball to the edge, and forwards it to the origin as a HTTP header to allow logging on the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_access_mtls_hostname_settings#client_certificate_forwarding ZeroTrustAccessMtlsHostnameSettings#client_certificate_forwarding}
  */
  readonly clientCertificateForwarding: boolean | cdktf.IResolvable;
  /**
  * The hostname that these settings apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_access_mtls_hostname_settings#hostname ZeroTrustAccessMtlsHostnameSettings#hostname}
  */
  readonly hostname: string;
}

export function zeroTrustAccessMtlsHostnameSettingsSettingsToTerraform(struct?: ZeroTrustAccessMtlsHostnameSettingsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    china_network: cdktf.booleanToTerraform(struct!.chinaNetwork),
    client_certificate_forwarding: cdktf.booleanToTerraform(struct!.clientCertificateForwarding),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function zeroTrustAccessMtlsHostnameSettingsSettingsToHclTerraform(struct?: ZeroTrustAccessMtlsHostnameSettingsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    china_network: {
      value: cdktf.booleanToHclTerraform(struct!.chinaNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_certificate_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessMtlsHostnameSettingsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chinaNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.chinaNetwork = this._chinaNetwork;
    }
    if (this._clientCertificateForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateForwarding = this._clientCertificateForwarding;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessMtlsHostnameSettingsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chinaNetwork = undefined;
      this._clientCertificateForwarding = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chinaNetwork = value.chinaNetwork;
      this._clientCertificateForwarding = value.clientCertificateForwarding;
      this._hostname = value.hostname;
    }
  }

  // china_network - computed: false, optional: false, required: true
  private _chinaNetwork?: boolean | cdktf.IResolvable; 
  public get chinaNetwork() {
    return this.getBooleanAttribute('china_network');
  }
  public set chinaNetwork(value: boolean | cdktf.IResolvable) {
    this._chinaNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chinaNetworkInput() {
    return this._chinaNetwork;
  }

  // client_certificate_forwarding - computed: false, optional: false, required: true
  private _clientCertificateForwarding?: boolean | cdktf.IResolvable; 
  public get clientCertificateForwarding() {
    return this.getBooleanAttribute('client_certificate_forwarding');
  }
  public set clientCertificateForwarding(value: boolean | cdktf.IResolvable) {
    this._clientCertificateForwarding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateForwardingInput() {
    return this._clientCertificateForwarding;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}

export class ZeroTrustAccessMtlsHostnameSettingsSettingsList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessMtlsHostnameSettingsSettings[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference {
    return new ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_access_mtls_hostname_settings cloudflare_zero_trust_access_mtls_hostname_settings}
*/
export class ZeroTrustAccessMtlsHostnameSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_mtls_hostname_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustAccessMtlsHostnameSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustAccessMtlsHostnameSettings to import
  * @param importFromId The id of the existing ZeroTrustAccessMtlsHostnameSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_access_mtls_hostname_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustAccessMtlsHostnameSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_mtls_hostname_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/zero_trust_access_mtls_hostname_settings cloudflare_zero_trust_access_mtls_hostname_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustAccessMtlsHostnameSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustAccessMtlsHostnameSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_mtls_hostname_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.12.0',
        providerVersionConstraint: '~> 5.0'
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
    this._settings.internalValue = config.settings;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // china_network - computed: true, optional: false, required: false
  public get chinaNetwork() {
    return this.getBooleanAttribute('china_network');
  }

  // client_certificate_forwarding - computed: true, optional: false, required: false
  public get clientCertificateForwarding() {
    return this.getBooleanAttribute('client_certificate_forwarding');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new ZeroTrustAccessMtlsHostnameSettingsSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: ZeroTrustAccessMtlsHostnameSettingsSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      settings: cdktf.listMapper(zeroTrustAccessMtlsHostnameSettingsSettingsToTerraform, false)(this._settings.internalValue),
      zone_id: cdktf.stringToTerraform(this._zoneId),
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
      settings: {
        value: cdktf.listMapperHcl(zeroTrustAccessMtlsHostnameSettingsSettingsToHclTerraform, false)(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessMtlsHostnameSettingsSettingsList",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
