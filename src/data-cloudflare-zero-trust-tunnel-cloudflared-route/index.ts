/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustTunnelCloudflaredRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudflare account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#account_id DataCloudflareZeroTrustTunnelCloudflaredRoute#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#filter DataCloudflareZeroTrustTunnelCloudflaredRoute#filter}
  */
  readonly filter?: DataCloudflareZeroTrustTunnelCloudflaredRouteFilter;
  /**
  * UUID of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#route_id DataCloudflareZeroTrustTunnelCloudflaredRoute#route_id}
  */
  readonly routeId?: string;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredRouteFilter {
  /**
  * Optional remark describing the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#comment DataCloudflareZeroTrustTunnelCloudflaredRoute#comment}
  */
  readonly comment?: string;
  /**
  * If provided, include only resources that were created (and not deleted) before this time. URL encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#existed_at DataCloudflareZeroTrustTunnelCloudflaredRoute#existed_at}
  */
  readonly existedAt?: string;
  /**
  * If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#is_deleted DataCloudflareZeroTrustTunnelCloudflaredRoute#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * If set, only list routes that are contained within this IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#network_subset DataCloudflareZeroTrustTunnelCloudflaredRoute#network_subset}
  */
  readonly networkSubset?: string;
  /**
  * If set, only list routes that contain this IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#network_superset DataCloudflareZeroTrustTunnelCloudflaredRoute#network_superset}
  */
  readonly networkSuperset?: string;
  /**
  * UUID of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#route_id DataCloudflareZeroTrustTunnelCloudflaredRoute#route_id}
  */
  readonly routeId?: string;
  /**
  * The types of tunnels to filter by, separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#tun_types DataCloudflareZeroTrustTunnelCloudflaredRoute#tun_types}
  */
  readonly tunTypes?: string[];
  /**
  * UUID of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#tunnel_id DataCloudflareZeroTrustTunnelCloudflaredRoute#tunnel_id}
  */
  readonly tunnelId?: string;
  /**
  * UUID of the virtual network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#virtual_network_id DataCloudflareZeroTrustTunnelCloudflaredRoute#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
}

export function dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredRouteFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    existed_at: cdktf.stringToTerraform(struct!.existedAt),
    is_deleted: cdktf.booleanToTerraform(struct!.isDeleted),
    network_subset: cdktf.stringToTerraform(struct!.networkSubset),
    network_superset: cdktf.stringToTerraform(struct!.networkSuperset),
    route_id: cdktf.stringToTerraform(struct!.routeId),
    tun_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tunTypes),
    tunnel_id: cdktf.stringToTerraform(struct!.tunnelId),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}


export function dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredRouteFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    existed_at: {
      value: cdktf.stringToHclTerraform(struct!.existedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.isDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_subset: {
      value: cdktf.stringToHclTerraform(struct!.networkSubset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_superset: {
      value: cdktf.stringToHclTerraform(struct!.networkSuperset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_id: {
      value: cdktf.stringToHclTerraform(struct!.routeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tun_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tunTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tunnel_id: {
      value: cdktf.stringToHclTerraform(struct!.tunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredRouteFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._existedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.existedAt = this._existedAt;
    }
    if (this._isDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeleted = this._isDeleted;
    }
    if (this._networkSubset !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSubset = this._networkSubset;
    }
    if (this._networkSuperset !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSuperset = this._networkSuperset;
    }
    if (this._routeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeId = this._routeId;
    }
    if (this._tunTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunTypes = this._tunTypes;
    }
    if (this._tunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelId = this._tunnelId;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredRouteFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._existedAt = undefined;
      this._isDeleted = undefined;
      this._networkSubset = undefined;
      this._networkSuperset = undefined;
      this._routeId = undefined;
      this._tunTypes = undefined;
      this._tunnelId = undefined;
      this._virtualNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._existedAt = value.existedAt;
      this._isDeleted = value.isDeleted;
      this._networkSubset = value.networkSubset;
      this._networkSuperset = value.networkSuperset;
      this._routeId = value.routeId;
      this._tunTypes = value.tunTypes;
      this._tunnelId = value.tunnelId;
      this._virtualNetworkId = value.virtualNetworkId;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // existed_at - computed: false, optional: true, required: false
  private _existedAt?: string; 
  public get existedAt() {
    return this.getStringAttribute('existed_at');
  }
  public set existedAt(value: string) {
    this._existedAt = value;
  }
  public resetExistedAt() {
    this._existedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existedAtInput() {
    return this._existedAt;
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

  // network_subset - computed: false, optional: true, required: false
  private _networkSubset?: string; 
  public get networkSubset() {
    return this.getStringAttribute('network_subset');
  }
  public set networkSubset(value: string) {
    this._networkSubset = value;
  }
  public resetNetworkSubset() {
    this._networkSubset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSubsetInput() {
    return this._networkSubset;
  }

  // network_superset - computed: false, optional: true, required: false
  private _networkSuperset?: string; 
  public get networkSuperset() {
    return this.getStringAttribute('network_superset');
  }
  public set networkSuperset(value: string) {
    this._networkSuperset = value;
  }
  public resetNetworkSuperset() {
    this._networkSuperset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSupersetInput() {
    return this._networkSuperset;
  }

  // route_id - computed: false, optional: true, required: false
  private _routeId?: string; 
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  public resetRouteId() {
    this._routeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId;
  }

  // tun_types - computed: false, optional: true, required: false
  private _tunTypes?: string[]; 
  public get tunTypes() {
    return this.getListAttribute('tun_types');
  }
  public set tunTypes(value: string[]) {
    this._tunTypes = value;
  }
  public resetTunTypes() {
    this._tunTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunTypesInput() {
    return this._tunTypes;
  }

  // tunnel_id - computed: false, optional: true, required: false
  private _tunnelId?: string; 
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }
  public set tunnelId(value: string) {
    this._tunnelId = value;
  }
  public resetTunnelId() {
    this._tunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route cloudflare_zero_trust_tunnel_cloudflared_route}
*/
export class DataCloudflareZeroTrustTunnelCloudflaredRoute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredRoute to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_route cloudflare_zero_trust_tunnel_cloudflared_route} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustTunnelCloudflaredRouteConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustTunnelCloudflaredRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_route',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.5.0',
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
    this._routeId = config.routeId;
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
  private _filter = new DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZeroTrustTunnelCloudflaredRouteFilter) {
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

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // route_id - computed: false, optional: true, required: false
  private _routeId?: string; 
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  public resetRouteId() {
    this._routeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId;
  }

  // tunnel_id - computed: true, optional: false, required: false
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }

  // virtual_network_id - computed: true, optional: false, required: false
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToTerraform(this._filter.internalValue),
      route_id: cdktf.stringToTerraform(this._routeId),
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
        value: dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZeroTrustTunnelCloudflaredRouteFilter",
      },
      route_id: {
        value: cdktf.stringToHclTerraform(this._routeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
