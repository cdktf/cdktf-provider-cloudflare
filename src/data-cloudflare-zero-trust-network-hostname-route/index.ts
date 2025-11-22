/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_network_hostname_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustNetworkHostnameRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudflare account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_network_hostname_route#account_id DataCloudflareZeroTrustNetworkHostnameRoute#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_network_hostname_route#filter DataCloudflareZeroTrustNetworkHostnameRoute#filter}
  */
  readonly filter?: DataCloudflareZeroTrustNetworkHostnameRouteFilter;
  /**
  * The hostname route ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_network_hostname_route#hostname_route_id DataCloudflareZeroTrustNetworkHostnameRoute#hostname_route_id}
  */
  readonly hostnameRouteId?: string;
}
export interface DataCloudflareZeroTrustNetworkHostnameRouteFilter {
  /**
  * If set, only list hostname routes with the given comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_network_hostname_route#comment DataCloudflareZeroTrustNetworkHostnameRoute#comment}
  */
  readonly comment?: string;
  /**
  * If provided, include only resources that were created (and not deleted) before this time. URL encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_network_hostname_route#existed_at DataCloudflareZeroTrustNetworkHostnameRoute#existed_at}
  */
  readonly existedAt?: string;
  /**
  * If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_network_hostname_route#hostname DataCloudflareZeroTrustNetworkHostnameRoute#hostname}
  */
  readonly hostname?: string;
  /**
  * The hostname route ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_network_hostname_route#id DataCloudflareZeroTrustNetworkHostnameRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_network_hostname_route#is_deleted DataCloudflareZeroTrustNetworkHostnameRoute#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * If set, only list hostname routes that point to a specific tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_network_hostname_route#tunnel_id DataCloudflareZeroTrustNetworkHostnameRoute#tunnel_id}
  */
  readonly tunnelId?: string;
}

export function dataCloudflareZeroTrustNetworkHostnameRouteFilterToTerraform(struct?: DataCloudflareZeroTrustNetworkHostnameRouteFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    existed_at: cdktf.stringToTerraform(struct!.existedAt),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    id: cdktf.stringToTerraform(struct!.id),
    is_deleted: cdktf.booleanToTerraform(struct!.isDeleted),
    tunnel_id: cdktf.stringToTerraform(struct!.tunnelId),
  }
}


export function dataCloudflareZeroTrustNetworkHostnameRouteFilterToHclTerraform(struct?: DataCloudflareZeroTrustNetworkHostnameRouteFilter | cdktf.IResolvable): any {
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
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    tunnel_id: {
      value: cdktf.stringToHclTerraform(struct!.tunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustNetworkHostnameRouteFilter | cdktf.IResolvable | undefined {
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
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeleted = this._isDeleted;
    }
    if (this._tunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelId = this._tunnelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustNetworkHostnameRouteFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._existedAt = undefined;
      this._hostname = undefined;
      this._id = undefined;
      this._isDeleted = undefined;
      this._tunnelId = undefined;
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
      this._hostname = value.hostname;
      this._id = value.id;
      this._isDeleted = value.isDeleted;
      this._tunnelId = value.tunnelId;
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // is_deleted - computed: true, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_network_hostname_route cloudflare_zero_trust_network_hostname_route}
*/
export class DataCloudflareZeroTrustNetworkHostnameRoute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_network_hostname_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustNetworkHostnameRoute to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustNetworkHostnameRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_network_hostname_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustNetworkHostnameRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_network_hostname_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_network_hostname_route cloudflare_zero_trust_network_hostname_route} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustNetworkHostnameRouteConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustNetworkHostnameRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_network_hostname_route',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.13.0',
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
    this._hostnameRouteId = config.hostnameRouteId;
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
  private _filter = new DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZeroTrustNetworkHostnameRouteFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // hostname_route_id - computed: false, optional: true, required: false
  private _hostnameRouteId?: string; 
  public get hostnameRouteId() {
    return this.getStringAttribute('hostname_route_id');
  }
  public set hostnameRouteId(value: string) {
    this._hostnameRouteId = value;
  }
  public resetHostnameRouteId() {
    this._hostnameRouteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRouteIdInput() {
    return this._hostnameRouteId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tunnel_id - computed: true, optional: false, required: false
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }

  // tunnel_name - computed: true, optional: false, required: false
  public get tunnelName() {
    return this.getStringAttribute('tunnel_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareZeroTrustNetworkHostnameRouteFilterToTerraform(this._filter.internalValue),
      hostname_route_id: cdktf.stringToTerraform(this._hostnameRouteId),
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
        value: dataCloudflareZeroTrustNetworkHostnameRouteFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZeroTrustNetworkHostnameRouteFilter",
      },
      hostname_route_id: {
        value: cdktf.stringToHclTerraform(this._hostnameRouteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
