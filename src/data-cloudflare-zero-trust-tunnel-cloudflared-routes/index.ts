// https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudflare account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#account_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#account_id}
  */
  readonly accountId: string;
  /**
  * Optional remark describing the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#comment DataCloudflareZeroTrustTunnelCloudflaredRoutes#comment}
  */
  readonly comment?: string;
  /**
  * If provided, include only resources that were created (and not deleted) before this time. URL encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#existed_at DataCloudflareZeroTrustTunnelCloudflaredRoutes#existed_at}
  */
  readonly existedAt?: string;
  /**
  * If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#is_deleted DataCloudflareZeroTrustTunnelCloudflaredRoutes#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#max_items DataCloudflareZeroTrustTunnelCloudflaredRoutes#max_items}
  */
  readonly maxItems?: number;
  /**
  * If set, only list routes that are contained within this IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#network_subset DataCloudflareZeroTrustTunnelCloudflaredRoutes#network_subset}
  */
  readonly networkSubset?: string;
  /**
  * If set, only list routes that contain this IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#network_superset DataCloudflareZeroTrustTunnelCloudflaredRoutes#network_superset}
  */
  readonly networkSuperset?: string;
  /**
  * UUID of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#route_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#route_id}
  */
  readonly routeId?: string;
  /**
  * The types of tunnels to filter by, separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#tun_types DataCloudflareZeroTrustTunnelCloudflaredRoutes#tun_types}
  */
  readonly tunTypes?: string[];
  /**
  * UUID of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#tunnel_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#tunnel_id}
  */
  readonly tunnelId?: string;
  /**
  * UUID of the virtual network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#virtual_network_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredRoutesResult {
}

export function dataCloudflareZeroTrustTunnelCloudflaredRoutesResultToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredRoutesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustTunnelCloudflaredRoutesResultToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredRoutesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredRoutesResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredRoutesResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // tun_type - computed: true, optional: false, required: false
  public get tunType() {
    return this.getStringAttribute('tun_type');
  }

  // tunnel_id - computed: true, optional: false, required: false
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }

  // tunnel_name - computed: true, optional: false, required: false
  public get tunnelName() {
    return this.getStringAttribute('tunnel_name');
  }

  // virtual_network_id - computed: true, optional: false, required: false
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }

  // virtual_network_name - computed: true, optional: false, required: false
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
}

export class DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference {
    return new DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes cloudflare_zero_trust_tunnel_cloudflared_routes}
*/
export class DataCloudflareZeroTrustTunnelCloudflaredRoutes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoutes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredRoutes to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes cloudflare_zero_trust_tunnel_cloudflared_routes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_routes',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.3.0',
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
    this._comment = config.comment;
    this._existedAt = config.existedAt;
    this._isDeleted = config.isDeleted;
    this._maxItems = config.maxItems;
    this._networkSubset = config.networkSubset;
    this._networkSuperset = config.networkSuperset;
    this._routeId = config.routeId;
    this._tunTypes = config.tunTypes;
    this._tunnelId = config.tunnelId;
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

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
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

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList(this, "result", false);
  public get result() {
    return this._result;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      comment: cdktf.stringToTerraform(this._comment),
      existed_at: cdktf.stringToTerraform(this._existedAt),
      is_deleted: cdktf.booleanToTerraform(this._isDeleted),
      max_items: cdktf.numberToTerraform(this._maxItems),
      network_subset: cdktf.stringToTerraform(this._networkSubset),
      network_superset: cdktf.stringToTerraform(this._networkSuperset),
      route_id: cdktf.stringToTerraform(this._routeId),
      tun_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunTypes),
      tunnel_id: cdktf.stringToTerraform(this._tunnelId),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existed_at: {
        value: cdktf.stringToHclTerraform(this._existedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_deleted: {
        value: cdktf.booleanToHclTerraform(this._isDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_subset: {
        value: cdktf.stringToHclTerraform(this._networkSubset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_superset: {
        value: cdktf.stringToHclTerraform(this._networkSuperset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_id: {
        value: cdktf.stringToHclTerraform(this._routeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tun_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tunnel_id: {
        value: cdktf.stringToHclTerraform(this._tunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
