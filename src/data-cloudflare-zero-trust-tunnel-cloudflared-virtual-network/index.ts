/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudflare account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#account_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#filter DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#filter}
  */
  readonly filter?: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter;
  /**
  * UUID of the virtual network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#virtual_network_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter {
  /**
  * UUID of the virtual network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If `true`, only include the default virtual network. If `false`, exclude the default virtual network. If empty, all virtual networks will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#is_default DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * If `true`, only include deleted virtual networks. If `false`, exclude deleted virtual networks. If empty, all virtual networks will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#is_deleted DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * A user-friendly name for the virtual network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#name DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#name}
  */
  readonly name?: string;
}

export function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    is_deleted: cdktf.booleanToTerraform(struct!.isDeleted),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.isDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._isDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeleted = this._isDeleted;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._isDefault = undefined;
      this._isDeleted = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._isDefault = value.isDefault;
      this._isDeleted = value.isDeleted;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // is_deleted - computed: false, optional: true, required: false
  private _isDeleted?: boolean | cdktf.IResolvable; 
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
  }
  public set isDeleted(value: boolean | cdktf.IResolvable) {
    this._isDeleted = value;
  }
  public resetIsDeleted() {
    this._isDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeletedInput() {
    return this._isDeleted;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network}
*/
export class DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_virtual_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_virtual_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.2',
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
    this._filter.internalValue = config.filter;
    this._virtualNetworkId = config.virtualNetworkId;
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

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default_network - computed: true, optional: false, required: false
  public get isDefaultNetwork() {
    return this.getBooleanAttribute('is_default_network');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToTerraform(this._filter.internalValue),
      virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
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
      filter: {
        value: dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter",
      },
      virtual_network_id: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
