/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/device_managed_networks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceManagedNetworksConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/device_managed_networks#account_id DeviceManagedNetworks#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/device_managed_networks#id DeviceManagedNetworks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Device Managed Network. Must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/device_managed_networks#name DeviceManagedNetworks#name}
  */
  readonly name: string;
  /**
  * The type of Device Managed Network. Available values: `tls`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/device_managed_networks#type DeviceManagedNetworks#type}
  */
  readonly type: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/device_managed_networks#config DeviceManagedNetworks#config}
  */
  readonly config: DeviceManagedNetworksConfigA;
}
export interface DeviceManagedNetworksConfigA {
  /**
  * The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr. If absent, regular certificate verification (trusted roots, valid timestamp, etc) will be used to validate the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/device_managed_networks#sha256 DeviceManagedNetworks#sha256}
  */
  readonly sha256: string;
  /**
  * A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/device_managed_networks#tls_sockaddr DeviceManagedNetworks#tls_sockaddr}
  */
  readonly tlsSockaddr: string;
}

export function deviceManagedNetworksConfigAToTerraform(struct?: DeviceManagedNetworksConfigAOutputReference | DeviceManagedNetworksConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256: cdktf.stringToTerraform(struct!.sha256),
    tls_sockaddr: cdktf.stringToTerraform(struct!.tlsSockaddr),
  }
}


export function deviceManagedNetworksConfigAToHclTerraform(struct?: DeviceManagedNetworksConfigAOutputReference | DeviceManagedNetworksConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256: {
      value: cdktf.stringToHclTerraform(struct!.sha256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_sockaddr: {
      value: cdktf.stringToHclTerraform(struct!.tlsSockaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceManagedNetworksConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeviceManagedNetworksConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256;
    }
    if (this._tlsSockaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSockaddr = this._tlsSockaddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceManagedNetworksConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256 = undefined;
      this._tlsSockaddr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256 = value.sha256;
      this._tlsSockaddr = value.tlsSockaddr;
    }
  }

  // sha256 - computed: false, optional: false, required: true
  private _sha256?: string; 
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
  public set sha256(value: string) {
    this._sha256 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256;
  }

  // tls_sockaddr - computed: false, optional: false, required: true
  private _tlsSockaddr?: string; 
  public get tlsSockaddr() {
    return this.getStringAttribute('tls_sockaddr');
  }
  public set tlsSockaddr(value: string) {
    this._tlsSockaddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSockaddrInput() {
    return this._tlsSockaddr;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/device_managed_networks cloudflare_device_managed_networks}
*/
export class DeviceManagedNetworks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_device_managed_networks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceManagedNetworks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceManagedNetworks to import
  * @param importFromId The id of the existing DeviceManagedNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/device_managed_networks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceManagedNetworks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_device_managed_networks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/device_managed_networks cloudflare_device_managed_networks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceManagedNetworksConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceManagedNetworksConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_device_managed_networks',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.51.0',
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

  // config - computed: false, optional: false, required: true
  private _config = new DeviceManagedNetworksConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DeviceManagedNetworksConfigA) {
    this._config.internalValue = value;
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
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      config: deviceManagedNetworksConfigAToTerraform(this._config.internalValue),
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
        value: deviceManagedNetworksConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceManagedNetworksConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
