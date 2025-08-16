/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustTunnelCloudflaredsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudflare account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds#account_id DataCloudflareZeroTrustTunnelCloudflareds#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds#exclude_prefix DataCloudflareZeroTrustTunnelCloudflareds#exclude_prefix}
  */
  readonly excludePrefix?: string;
  /**
  * If provided, include only resources that were created (and not deleted) before this time. URL encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds#existed_at DataCloudflareZeroTrustTunnelCloudflareds#existed_at}
  */
  readonly existedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds#include_prefix DataCloudflareZeroTrustTunnelCloudflareds#include_prefix}
  */
  readonly includePrefix?: string;
  /**
  * If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds#is_deleted DataCloudflareZeroTrustTunnelCloudflareds#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds#max_items DataCloudflareZeroTrustTunnelCloudflareds#max_items}
  */
  readonly maxItems?: number;
  /**
  * A user-friendly name for a tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds#name DataCloudflareZeroTrustTunnelCloudflareds#name}
  */
  readonly name?: string;
  /**
  * The status of the tunnel. Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
  * Available values: "inactive", "degraded", "healthy", "down".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds#status DataCloudflareZeroTrustTunnelCloudflareds#status}
  */
  readonly status?: string;
  /**
  * UUID of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds#uuid DataCloudflareZeroTrustTunnelCloudflareds#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds#was_active_at DataCloudflareZeroTrustTunnelCloudflareds#was_active_at}
  */
  readonly wasActiveAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds#was_inactive_at DataCloudflareZeroTrustTunnelCloudflareds#was_inactive_at}
  */
  readonly wasInactiveAt?: string;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredsResultConnections {
}

export function dataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredsResultConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredsResultConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredsResultConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredsResultConnections | undefined) {
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

export class DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference {
    return new DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustTunnelCloudflaredsResult {
}

export function dataCloudflareZeroTrustTunnelCloudflaredsResultToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustTunnelCloudflaredsResultToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_tag - computed: true, optional: false, required: false
  public get accountTag() {
    return this.getStringAttribute('account_tag');
  }

  // config_src - computed: true, optional: false, required: false
  public get configSrc() {
    return this.getStringAttribute('config_src');
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList(this, "connections", false);
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
}

export class DataCloudflareZeroTrustTunnelCloudflaredsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference {
    return new DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds cloudflare_zero_trust_tunnel_cloudflareds}
*/
export class DataCloudflareZeroTrustTunnelCloudflareds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflareds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflareds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflareds to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflareds that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflareds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflareds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/zero_trust_tunnel_cloudflareds cloudflare_zero_trust_tunnel_cloudflareds} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustTunnelCloudflaredsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustTunnelCloudflaredsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflareds',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.4',
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
    this._excludePrefix = config.excludePrefix;
    this._existedAt = config.existedAt;
    this._includePrefix = config.includePrefix;
    this._isDeleted = config.isDeleted;
    this._maxItems = config.maxItems;
    this._name = config.name;
    this._status = config.status;
    this._uuid = config.uuid;
    this._wasActiveAt = config.wasActiveAt;
    this._wasInactiveAt = config.wasInactiveAt;
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

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareZeroTrustTunnelCloudflaredsResultList(this, "result", false);
  public get result() {
    return this._result;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      exclude_prefix: cdktf.stringToTerraform(this._excludePrefix),
      existed_at: cdktf.stringToTerraform(this._existedAt),
      include_prefix: cdktf.stringToTerraform(this._includePrefix),
      is_deleted: cdktf.booleanToTerraform(this._isDeleted),
      max_items: cdktf.numberToTerraform(this._maxItems),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      uuid: cdktf.stringToTerraform(this._uuid),
      was_active_at: cdktf.stringToTerraform(this._wasActiveAt),
      was_inactive_at: cdktf.stringToTerraform(this._wasInactiveAt),
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
      exclude_prefix: {
        value: cdktf.stringToHclTerraform(this._excludePrefix),
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
      include_prefix: {
        value: cdktf.stringToHclTerraform(this._includePrefix),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      was_active_at: {
        value: cdktf.stringToHclTerraform(this._wasActiveAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      was_inactive_at: {
        value: cdktf.stringToHclTerraform(this._wasInactiveAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
