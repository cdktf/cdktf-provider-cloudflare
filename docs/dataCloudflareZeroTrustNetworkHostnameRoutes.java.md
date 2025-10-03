# `dataCloudflareZeroTrustNetworkHostnameRoutes` Submodule <a name="`dataCloudflareZeroTrustNetworkHostnameRoutes` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustNetworkHostnameRoutes <a name="DataCloudflareZeroTrustNetworkHostnameRoutes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes cloudflare_zero_trust_network_hostname_routes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_network_hostname_routes.DataCloudflareZeroTrustNetworkHostnameRoutes;

DataCloudflareZeroTrustNetworkHostnameRoutes.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .comment(java.lang.String)
//  .existedAt(java.lang.String)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .isDeleted(java.lang.Boolean)
//  .isDeleted(IResolvable)
//  .maxItems(java.lang.Number)
//  .tunnelId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | If set, only list hostname routes with the given comment. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.existedAt">existedAt</a></code> | <code>java.lang.String</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The hostname route ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.isDeleted">isDeleted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | If set, only list hostname routes that point to a specific tunnel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#account_id DataCloudflareZeroTrustNetworkHostnameRoutes#account_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

If set, only list hostname routes with the given comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#comment DataCloudflareZeroTrustNetworkHostnameRoutes#comment}

---

##### `existedAt`<sup>Optional</sup> <a name="existedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.existedAt"></a>

- *Type:* java.lang.String

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#existed_at DataCloudflareZeroTrustNetworkHostnameRoutes#existed_at}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#hostname DataCloudflareZeroTrustNetworkHostnameRoutes#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The hostname route ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#id DataCloudflareZeroTrustNetworkHostnameRoutes#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDeleted`<sup>Optional</sup> <a name="isDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.isDeleted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#is_deleted DataCloudflareZeroTrustNetworkHostnameRoutes#is_deleted}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#max_items DataCloudflareZeroTrustNetworkHostnameRoutes#max_items}

---

##### `tunnelId`<sup>Optional</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.tunnelId"></a>

- *Type:* java.lang.String

If set, only list hostname routes that point to a specific tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#tunnel_id DataCloudflareZeroTrustNetworkHostnameRoutes#tunnel_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetExistedAt">resetExistedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetIsDeleted">resetIsDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetTunnelId">resetTunnelId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetComment"></a>

```java
public void resetComment()
```

##### `resetExistedAt` <a name="resetExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetExistedAt"></a>

```java
public void resetExistedAt()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetId"></a>

```java
public void resetId()
```

##### `resetIsDeleted` <a name="resetIsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetIsDeleted"></a>

```java
public void resetIsDeleted()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetTunnelId` <a name="resetTunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetTunnelId"></a>

```java
public void resetTunnelId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoutes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_network_hostname_routes.DataCloudflareZeroTrustNetworkHostnameRoutes;

DataCloudflareZeroTrustNetworkHostnameRoutes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_network_hostname_routes.DataCloudflareZeroTrustNetworkHostnameRoutes;

DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_network_hostname_routes.DataCloudflareZeroTrustNetworkHostnameRoutes;

DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_network_hostname_routes.DataCloudflareZeroTrustNetworkHostnameRoutes;

DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoutes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustNetworkHostnameRoutes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustNetworkHostnameRoutes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustNetworkHostnameRoutes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList">DataCloudflareZeroTrustNetworkHostnameRoutesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.existedAtInput">existedAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.isDeletedInput">isDeletedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.tunnelIdInput">tunnelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.existedAt">existedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.isDeleted">isDeleted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.result"></a>

```java
public DataCloudflareZeroTrustNetworkHostnameRoutesResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList">DataCloudflareZeroTrustNetworkHostnameRoutesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `existedAtInput`<sup>Optional</sup> <a name="existedAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.existedAtInput"></a>

```java
public java.lang.String getExistedAtInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDeletedInput`<sup>Optional</sup> <a name="isDeletedInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.isDeletedInput"></a>

```java
public java.lang.Object getIsDeletedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.tunnelIdInput"></a>

```java
public java.lang.String getTunnelIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `existedAt`<sup>Required</sup> <a name="existedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.existedAt"></a>

```java
public java.lang.String getExistedAt();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.isDeleted"></a>

```java
public java.lang.Object getIsDeleted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustNetworkHostnameRoutesConfig <a name="DataCloudflareZeroTrustNetworkHostnameRoutesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_network_hostname_routes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig;

DataCloudflareZeroTrustNetworkHostnameRoutesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .comment(java.lang.String)
//  .existedAt(java.lang.String)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .isDeleted(java.lang.Boolean)
//  .isDeleted(IResolvable)
//  .maxItems(java.lang.Number)
//  .tunnelId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | If set, only list hostname routes with the given comment. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.existedAt">existedAt</a></code> | <code>java.lang.String</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.id">id</a></code> | <code>java.lang.String</code> | The hostname route ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.isDeleted">isDeleted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | If set, only list hostname routes that point to a specific tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#account_id DataCloudflareZeroTrustNetworkHostnameRoutes#account_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

If set, only list hostname routes with the given comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#comment DataCloudflareZeroTrustNetworkHostnameRoutes#comment}

---

##### `existedAt`<sup>Optional</sup> <a name="existedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.existedAt"></a>

```java
public java.lang.String getExistedAt();
```

- *Type:* java.lang.String

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#existed_at DataCloudflareZeroTrustNetworkHostnameRoutes#existed_at}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#hostname DataCloudflareZeroTrustNetworkHostnameRoutes#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The hostname route ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#id DataCloudflareZeroTrustNetworkHostnameRoutes#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDeleted`<sup>Optional</sup> <a name="isDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.isDeleted"></a>

```java
public java.lang.Object getIsDeleted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#is_deleted DataCloudflareZeroTrustNetworkHostnameRoutes#is_deleted}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#max_items DataCloudflareZeroTrustNetworkHostnameRoutes#max_items}

---

##### `tunnelId`<sup>Optional</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

If set, only list hostname routes that point to a specific tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_network_hostname_routes#tunnel_id DataCloudflareZeroTrustNetworkHostnameRoutes#tunnel_id}

---

### DataCloudflareZeroTrustNetworkHostnameRoutesResult <a name="DataCloudflareZeroTrustNetworkHostnameRoutesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_network_hostname_routes.DataCloudflareZeroTrustNetworkHostnameRoutesResult;

DataCloudflareZeroTrustNetworkHostnameRoutesResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustNetworkHostnameRoutesResultList <a name="DataCloudflareZeroTrustNetworkHostnameRoutesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_network_hostname_routes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList;

new DataCloudflareZeroTrustNetworkHostnameRoutesResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.get"></a>

```java
public DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference <a name="DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_network_hostname_routes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference;

new DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.deletedAt">deletedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.tunnelName">tunnelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResult">DataCloudflareZeroTrustNetworkHostnameRoutesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.deletedAt"></a>

```java
public java.lang.String getDeletedAt();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

##### `tunnelName`<sup>Required</sup> <a name="tunnelName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.tunnelName"></a>

```java
public java.lang.String getTunnelName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustNetworkHostnameRoutesResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResult">DataCloudflareZeroTrustNetworkHostnameRoutesResult</a>

---



