# `dataCloudflareZeroTrustTunnelWarpConnectors` Submodule <a name="`dataCloudflareZeroTrustTunnelWarpConnectors` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelWarpConnectors <a name="DataCloudflareZeroTrustTunnelWarpConnectors" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors cloudflare_zero_trust_tunnel_warp_connectors}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connectors.DataCloudflareZeroTrustTunnelWarpConnectors;

DataCloudflareZeroTrustTunnelWarpConnectors.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .excludePrefix(java.lang.String)
//  .existedAt(java.lang.String)
//  .includePrefix(java.lang.String)
//  .isDeleted(java.lang.Boolean|IResolvable)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .status(java.lang.String)
//  .uuid(java.lang.String)
//  .wasActiveAt(java.lang.String)
//  .wasInactiveAt(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.excludePrefix">excludePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnectors#exclude_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.existedAt">existedAt</a></code> | <code>java.lang.String</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.includePrefix">includePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#include_prefix DataCloudflareZeroTrustTunnelWarpConnectors#include_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.isDeleted">isDeleted</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-friendly name for the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The status of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.uuid">uuid</a></code> | <code>java.lang.String</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.wasActiveAt">wasActiveAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#was_active_at DataCloudflareZeroTrustTunnelWarpConnectors#was_active_at}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.wasInactiveAt">wasInactiveAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnectors#was_inactive_at}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#account_id DataCloudflareZeroTrustTunnelWarpConnectors#account_id}

---

##### `excludePrefix`<sup>Optional</sup> <a name="excludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.excludePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnectors#exclude_prefix}.

---

##### `existedAt`<sup>Optional</sup> <a name="existedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.existedAt"></a>

- *Type:* java.lang.String

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#existed_at DataCloudflareZeroTrustTunnelWarpConnectors#existed_at}

---

##### `includePrefix`<sup>Optional</sup> <a name="includePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.includePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#include_prefix DataCloudflareZeroTrustTunnelWarpConnectors#include_prefix}.

---

##### `isDeleted`<sup>Optional</sup> <a name="isDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.isDeleted"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#is_deleted DataCloudflareZeroTrustTunnelWarpConnectors#is_deleted}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#max_items DataCloudflareZeroTrustTunnelWarpConnectors#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-friendly name for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#name DataCloudflareZeroTrustTunnelWarpConnectors#name}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The status of the tunnel.

Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
Available values: "inactive", "degraded", "healthy", "down".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#status DataCloudflareZeroTrustTunnelWarpConnectors#status}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.uuid"></a>

- *Type:* java.lang.String

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#uuid DataCloudflareZeroTrustTunnelWarpConnectors#uuid}

---

##### `wasActiveAt`<sup>Optional</sup> <a name="wasActiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.wasActiveAt"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#was_active_at DataCloudflareZeroTrustTunnelWarpConnectors#was_active_at}.

---

##### `wasInactiveAt`<sup>Optional</sup> <a name="wasInactiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.wasInactiveAt"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnectors#was_inactive_at}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetExcludePrefix">resetExcludePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetExistedAt">resetExistedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetIncludePrefix">resetIncludePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetIsDeleted">resetIsDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetUuid">resetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetWasActiveAt">resetWasActiveAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetWasInactiveAt">resetWasInactiveAt</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetExcludePrefix` <a name="resetExcludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetExcludePrefix"></a>

```java
public void resetExcludePrefix()
```

##### `resetExistedAt` <a name="resetExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetExistedAt"></a>

```java
public void resetExistedAt()
```

##### `resetIncludePrefix` <a name="resetIncludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetIncludePrefix"></a>

```java
public void resetIncludePrefix()
```

##### `resetIsDeleted` <a name="resetIsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetIsDeleted"></a>

```java
public void resetIsDeleted()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetName"></a>

```java
public void resetName()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetUuid"></a>

```java
public void resetUuid()
```

##### `resetWasActiveAt` <a name="resetWasActiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetWasActiveAt"></a>

```java
public void resetWasActiveAt()
```

##### `resetWasInactiveAt` <a name="resetWasInactiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetWasInactiveAt"></a>

```java
public void resetWasInactiveAt()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelWarpConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connectors.DataCloudflareZeroTrustTunnelWarpConnectors;

DataCloudflareZeroTrustTunnelWarpConnectors.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connectors.DataCloudflareZeroTrustTunnelWarpConnectors;

DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connectors.DataCloudflareZeroTrustTunnelWarpConnectors;

DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connectors.DataCloudflareZeroTrustTunnelWarpConnectors;

DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelWarpConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelWarpConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustTunnelWarpConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelWarpConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList">DataCloudflareZeroTrustTunnelWarpConnectorsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.excludePrefixInput">excludePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.existedAtInput">existedAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.includePrefixInput">includePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.isDeletedInput">isDeletedInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasActiveAtInput">wasActiveAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasInactiveAtInput">wasInactiveAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.excludePrefix">excludePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.existedAt">existedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.includePrefix">includePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.isDeleted">isDeleted</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasActiveAt">wasActiveAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasInactiveAt">wasInactiveAt</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.result"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorsResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList">DataCloudflareZeroTrustTunnelWarpConnectorsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `excludePrefixInput`<sup>Optional</sup> <a name="excludePrefixInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.excludePrefixInput"></a>

```java
public java.lang.String getExcludePrefixInput();
```

- *Type:* java.lang.String

---

##### `existedAtInput`<sup>Optional</sup> <a name="existedAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.existedAtInput"></a>

```java
public java.lang.String getExistedAtInput();
```

- *Type:* java.lang.String

---

##### `includePrefixInput`<sup>Optional</sup> <a name="includePrefixInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.includePrefixInput"></a>

```java
public java.lang.String getIncludePrefixInput();
```

- *Type:* java.lang.String

---

##### `isDeletedInput`<sup>Optional</sup> <a name="isDeletedInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.isDeletedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDeletedInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `wasActiveAtInput`<sup>Optional</sup> <a name="wasActiveAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasActiveAtInput"></a>

```java
public java.lang.String getWasActiveAtInput();
```

- *Type:* java.lang.String

---

##### `wasInactiveAtInput`<sup>Optional</sup> <a name="wasInactiveAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasInactiveAtInput"></a>

```java
public java.lang.String getWasInactiveAtInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `excludePrefix`<sup>Required</sup> <a name="excludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.excludePrefix"></a>

```java
public java.lang.String getExcludePrefix();
```

- *Type:* java.lang.String

---

##### `existedAt`<sup>Required</sup> <a name="existedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.existedAt"></a>

```java
public java.lang.String getExistedAt();
```

- *Type:* java.lang.String

---

##### `includePrefix`<sup>Required</sup> <a name="includePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.includePrefix"></a>

```java
public java.lang.String getIncludePrefix();
```

- *Type:* java.lang.String

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.isDeleted"></a>

```java
public java.lang.Boolean|IResolvable getIsDeleted();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `wasActiveAt`<sup>Required</sup> <a name="wasActiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasActiveAt"></a>

```java
public java.lang.String getWasActiveAt();
```

- *Type:* java.lang.String

---

##### `wasInactiveAt`<sup>Required</sup> <a name="wasInactiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasInactiveAt"></a>

```java
public java.lang.String getWasInactiveAt();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorsConfig <a name="DataCloudflareZeroTrustTunnelWarpConnectorsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig;

DataCloudflareZeroTrustTunnelWarpConnectorsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .excludePrefix(java.lang.String)
//  .existedAt(java.lang.String)
//  .includePrefix(java.lang.String)
//  .isDeleted(java.lang.Boolean|IResolvable)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .status(java.lang.String)
//  .uuid(java.lang.String)
//  .wasActiveAt(java.lang.String)
//  .wasInactiveAt(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.excludePrefix">excludePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnectors#exclude_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.existedAt">existedAt</a></code> | <code>java.lang.String</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.includePrefix">includePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#include_prefix DataCloudflareZeroTrustTunnelWarpConnectors#include_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.isDeleted">isDeleted</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-friendly name for the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.status">status</a></code> | <code>java.lang.String</code> | The status of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.uuid">uuid</a></code> | <code>java.lang.String</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.wasActiveAt">wasActiveAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#was_active_at DataCloudflareZeroTrustTunnelWarpConnectors#was_active_at}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.wasInactiveAt">wasInactiveAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnectors#was_inactive_at}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#account_id DataCloudflareZeroTrustTunnelWarpConnectors#account_id}

---

##### `excludePrefix`<sup>Optional</sup> <a name="excludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.excludePrefix"></a>

```java
public java.lang.String getExcludePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnectors#exclude_prefix}.

---

##### `existedAt`<sup>Optional</sup> <a name="existedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.existedAt"></a>

```java
public java.lang.String getExistedAt();
```

- *Type:* java.lang.String

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#existed_at DataCloudflareZeroTrustTunnelWarpConnectors#existed_at}

---

##### `includePrefix`<sup>Optional</sup> <a name="includePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.includePrefix"></a>

```java
public java.lang.String getIncludePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#include_prefix DataCloudflareZeroTrustTunnelWarpConnectors#include_prefix}.

---

##### `isDeleted`<sup>Optional</sup> <a name="isDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.isDeleted"></a>

```java
public java.lang.Boolean|IResolvable getIsDeleted();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#is_deleted DataCloudflareZeroTrustTunnelWarpConnectors#is_deleted}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#max_items DataCloudflareZeroTrustTunnelWarpConnectors#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-friendly name for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#name DataCloudflareZeroTrustTunnelWarpConnectors#name}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The status of the tunnel.

Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
Available values: "inactive", "degraded", "healthy", "down".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#status DataCloudflareZeroTrustTunnelWarpConnectors#status}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#uuid DataCloudflareZeroTrustTunnelWarpConnectors#uuid}

---

##### `wasActiveAt`<sup>Optional</sup> <a name="wasActiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.wasActiveAt"></a>

```java
public java.lang.String getWasActiveAt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#was_active_at DataCloudflareZeroTrustTunnelWarpConnectors#was_active_at}.

---

##### `wasInactiveAt`<sup>Optional</sup> <a name="wasInactiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.wasInactiveAt"></a>

```java
public java.lang.String getWasInactiveAt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_warp_connectors#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnectors#was_inactive_at}.

---

### DataCloudflareZeroTrustTunnelWarpConnectorsResult <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult;

DataCloudflareZeroTrustTunnelWarpConnectorsResult.builder()
    .build();
```


### DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections;

DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList;

new DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.get"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference;

new DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.clientVersion">clientVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.coloName">coloName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.isPendingReconnect">isPendingReconnect</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.openedAt">openedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.originIp">originIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections">DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.clientVersion"></a>

```java
public java.lang.String getClientVersion();
```

- *Type:* java.lang.String

---

##### `coloName`<sup>Required</sup> <a name="coloName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.coloName"></a>

```java
public java.lang.String getColoName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPendingReconnect`<sup>Required</sup> <a name="isPendingReconnect" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.isPendingReconnect"></a>

```java
public IResolvable getIsPendingReconnect();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `openedAt`<sup>Required</sup> <a name="openedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.openedAt"></a>

```java
public java.lang.String getOpenedAt();
```

- *Type:* java.lang.String

---

##### `originIp`<sup>Required</sup> <a name="originIp" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.originIp"></a>

```java
public java.lang.String getOriginIp();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections">DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections</a>

---


### DataCloudflareZeroTrustTunnelWarpConnectorsResultList <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList;

new DataCloudflareZeroTrustTunnelWarpConnectorsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.get"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference;

new DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.accountTag">accountTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList">DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connsActiveAt">connsActiveAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connsInactiveAt">connsInactiveAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.deletedAt">deletedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.tunType">tunType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult">DataCloudflareZeroTrustTunnelWarpConnectorsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountTag`<sup>Required</sup> <a name="accountTag" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.accountTag"></a>

```java
public java.lang.String getAccountTag();
```

- *Type:* java.lang.String

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connections"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList getConnections();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList">DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList</a>

---

##### `connsActiveAt`<sup>Required</sup> <a name="connsActiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connsActiveAt"></a>

```java
public java.lang.String getConnsActiveAt();
```

- *Type:* java.lang.String

---

##### `connsInactiveAt`<sup>Required</sup> <a name="connsInactiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connsInactiveAt"></a>

```java
public java.lang.String getConnsInactiveAt();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.deletedAt"></a>

```java
public java.lang.String getDeletedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tunType`<sup>Required</sup> <a name="tunType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.tunType"></a>

```java
public java.lang.String getTunType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorsResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult">DataCloudflareZeroTrustTunnelWarpConnectorsResult</a>

---



