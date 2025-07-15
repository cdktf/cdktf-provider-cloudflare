/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustTunnelWarpConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudflare account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector#account_id DataCloudflareZeroTrustTunnelWarpConnector#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector#filter DataCloudflareZeroTrustTunnelWarpConnector#filter}
  */
  readonly filter?: DataCloudflareZeroTrustTunnelWarpConnectorFilter;
  /**
  * UUID of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector#tunnel_id DataCloudflareZeroTrustTunnelWarpConnector#tunnel_id}
  */
  readonly tunnelId?: string;
}
export interface DataCloudflareZeroTrustTunnelWarpConnectorConnections {
}

export function dataCloudflareZeroTrustTunnelWarpConnectorConnectionsToTerraform(struct?: DataCloudflareZeroTrustTunnelWarpConnectorConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustTunnelWarpConnectorConnectionsToHclTerraform(struct?: DataCloudflareZeroTrustTunnelWarpConnectorConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustTunnelWarpConnectorConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelWarpConnectorConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_version - computed: true, optional: false, required: false
  public get clientVersion() {
    return this.getStringAttribute('client_version');
  }

  // colo_name - computed: true, optional: false, required: false
  public get coloName() {
    return this.getStringAttribute('colo_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_pending_reconnect - computed: true, optional: false, required: false
  public get isPendingReconnect() {
    return this.getBooleanAttribute('is_pending_reconnect');
  }

  // opened_at - computed: true, optional: false, required: false
  public get openedAt() {
    return this.getStringAttribute('opened_at');
  }

  // origin_ip - computed: true, optional: false, required: false
  public get originIp() {
    return this.getStringAttribute('origin_ip');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference {
    return new DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustTunnelWarpConnectorFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnector#exclude_prefix}
  */
  readonly excludePrefix?: string;
  /**
  * If provided, include only resources that were created (and not deleted) before this time. URL encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector#existed_at DataCloudflareZeroTrustTunnelWarpConnector#existed_at}
  */
  readonly existedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector#include_prefix DataCloudflareZeroTrustTunnelWarpConnector#include_prefix}
  */
  readonly includePrefix?: string;
  /**
  * If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector#is_deleted DataCloudflareZeroTrustTunnelWarpConnector#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * A user-friendly name for the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector#name DataCloudflareZeroTrustTunnelWarpConnector#name}
  */
  readonly name?: string;
  /**
  * The status of the tunnel. Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
  * Available values: "inactive", "degraded", "healthy", "down".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector#status DataCloudflareZeroTrustTunnelWarpConnector#status}
  */
  readonly status?: string;
  /**
  * UUID of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector#uuid DataCloudflareZeroTrustTunnelWarpConnector#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector#was_active_at DataCloudflareZeroTrustTunnelWarpConnector#was_active_at}
  */
  readonly wasActiveAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnector#was_inactive_at}
  */
  readonly wasInactiveAt?: string;
}

export function dataCloudflareZeroTrustTunnelWarpConnectorFilterToTerraform(struct?: DataCloudflareZeroTrustTunnelWarpConnectorFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_prefix: cdktf.stringToTerraform(struct!.excludePrefix),
    existed_at: cdktf.stringToTerraform(struct!.existedAt),
    include_prefix: cdktf.stringToTerraform(struct!.includePrefix),
    is_deleted: cdktf.booleanToTerraform(struct!.isDeleted),
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    was_active_at: cdktf.stringToTerraform(struct!.wasActiveAt),
    was_inactive_at: cdktf.stringToTerraform(struct!.wasInactiveAt),
  }
}


export function dataCloudflareZeroTrustTunnelWarpConnectorFilterToHclTerraform(struct?: DataCloudflareZeroTrustTunnelWarpConnectorFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_prefix: {
      value: cdktf.stringToHclTerraform(struct!.excludePrefix),
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
    include_prefix: {
      value: cdktf.stringToHclTerraform(struct!.includePrefix),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    was_active_at: {
      value: cdktf.stringToHclTerraform(struct!.wasActiveAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    was_inactive_at: {
      value: cdktf.stringToHclTerraform(struct!.wasInactiveAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustTunnelWarpConnectorFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePrefix = this._excludePrefix;
    }
    if (this._existedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.existedAt = this._existedAt;
    }
    if (this._includePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePrefix = this._includePrefix;
    }
    if (this._isDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeleted = this._isDeleted;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._wasActiveAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.wasActiveAt = this._wasActiveAt;
    }
    if (this._wasInactiveAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.wasInactiveAt = this._wasInactiveAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelWarpConnectorFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludePrefix = undefined;
      this._existedAt = undefined;
      this._includePrefix = undefined;
      this._isDeleted = undefined;
      this._name = undefined;
      this._status = undefined;
      this._uuid = undefined;
      this._wasActiveAt = undefined;
      this._wasInactiveAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludePrefix = value.excludePrefix;
      this._existedAt = value.existedAt;
      this._includePrefix = value.includePrefix;
      this._isDeleted = value.isDeleted;
      this._name = value.name;
      this._status = value.status;
      this._uuid = value.uuid;
      this._wasActiveAt = value.wasActiveAt;
      this._wasInactiveAt = value.wasInactiveAt;
    }
  }

  // exclude_prefix - computed: false, optional: true, required: false
  private _excludePrefix?: string; 
  public get excludePrefix() {
    return this.getStringAttribute('exclude_prefix');
  }
  public set excludePrefix(value: string) {
    this._excludePrefix = value;
  }
  public resetExcludePrefix() {
    this._excludePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePrefixInput() {
    return this._excludePrefix;
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

  // include_prefix - computed: false, optional: true, required: false
  private _includePrefix?: string; 
  public get includePrefix() {
    return this.getStringAttribute('include_prefix');
  }
  public set includePrefix(value: string) {
    this._includePrefix = value;
  }
  public resetIncludePrefix() {
    this._includePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePrefixInput() {
    return this._includePrefix;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // was_active_at - computed: false, optional: true, required: false
  private _wasActiveAt?: string; 
  public get wasActiveAt() {
    return this.getStringAttribute('was_active_at');
  }
  public set wasActiveAt(value: string) {
    this._wasActiveAt = value;
  }
  public resetWasActiveAt() {
    this._wasActiveAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasActiveAtInput() {
    return this._wasActiveAt;
  }

  // was_inactive_at - computed: false, optional: true, required: false
  private _wasInactiveAt?: string; 
  public get wasInactiveAt() {
    return this.getStringAttribute('was_inactive_at');
  }
  public set wasInactiveAt(value: string) {
    this._wasInactiveAt = value;
  }
  public resetWasInactiveAt() {
    this._wasInactiveAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasInactiveAtInput() {
    return this._wasInactiveAt;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector}
*/
export class DataCloudflareZeroTrustTunnelWarpConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_tunnel_warp_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelWarpConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelWarpConnector to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelWarpConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelWarpConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_warp_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustTunnelWarpConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustTunnelWarpConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_tunnel_warp_connector',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.0',
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
    this._tunnelId = config.tunnelId;
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

  // account_tag - computed: true, optional: false, required: false
  public get accountTag() {
    return this.getStringAttribute('account_tag');
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }

  // conns_active_at - computed: true, optional: false, required: false
  public get connsActiveAt() {
    return this.getStringAttribute('conns_active_at');
  }

  // conns_inactive_at - computed: true, optional: false, required: false
  public get connsInactiveAt() {
    return this.getStringAttribute('conns_inactive_at');
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
  private _filter = new DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZeroTrustTunnelWarpConnectorFilter) {
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

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remote_config - computed: true, optional: false, required: false
  public get remoteConfig() {
    return this.getBooleanAttribute('remote_config');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tun_type - computed: true, optional: false, required: false
  public get tunType() {
    return this.getStringAttribute('tun_type');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareZeroTrustTunnelWarpConnectorFilterToTerraform(this._filter.internalValue),
      tunnel_id: cdktf.stringToTerraform(this._tunnelId),
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
        value: dataCloudflareZeroTrustTunnelWarpConnectorFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZeroTrustTunnelWarpConnectorFilter",
      },
      tunnel_id: {
        value: cdktf.stringToHclTerraform(this._tunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
