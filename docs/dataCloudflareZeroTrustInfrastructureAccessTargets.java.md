# `dataCloudflareZeroTrustInfrastructureAccessTargets` Submodule <a name="`dataCloudflareZeroTrustInfrastructureAccessTargets` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustInfrastructureAccessTargets <a name="DataCloudflareZeroTrustInfrastructureAccessTargets" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets cloudflare_zero_trust_infrastructure_access_targets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargets;

DataCloudflareZeroTrustInfrastructureAccessTargets.Builder.create(Construct scope, java.lang.String id)
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
//  .createdAfter(java.lang.String)
//  .hostname(java.lang.String)
//  .hostnameContains(java.lang.String)
//  .ipv4(java.lang.String)
//  .ipv6(java.lang.String)
//  .modifiedAfter(java.lang.String)
//  .virtualNetworkId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | A date and time after a target was created to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | The hostname of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.hostnameContains">hostnameContains</a></code> | <code>java.lang.String</code> | Partial match to the hostname of a target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.ipv4">ipv4</a></code> | <code>java.lang.String</code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.ipv6">ipv6</a></code> | <code>java.lang.String</code> | The target's IPv6 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.modifiedAfter">modifiedAfter</a></code> | <code>java.lang.String</code> | A date and time after a target was modified to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | The private virtual network identifier for the target. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#account_id DataCloudflareZeroTrustInfrastructureAccessTargets#account_id}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.createdAfter"></a>

- *Type:* java.lang.String

A date and time after a target was created to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#created_after DataCloudflareZeroTrustInfrastructureAccessTargets#created_after}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

The hostname of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#hostname DataCloudflareZeroTrustInfrastructureAccessTargets#hostname}

---

##### `hostnameContains`<sup>Optional</sup> <a name="hostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.hostnameContains"></a>

- *Type:* java.lang.String

Partial match to the hostname of a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#hostname_contains DataCloudflareZeroTrustInfrastructureAccessTargets#hostname_contains}

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.ipv4"></a>

- *Type:* java.lang.String

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#ipv4 DataCloudflareZeroTrustInfrastructureAccessTargets#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.ipv6"></a>

- *Type:* java.lang.String

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#ipv6 DataCloudflareZeroTrustInfrastructureAccessTargets#ipv6}

---

##### `modifiedAfter`<sup>Optional</sup> <a name="modifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.modifiedAfter"></a>

- *Type:* java.lang.String

A date and time after a target was modified to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#modified_after DataCloudflareZeroTrustInfrastructureAccessTargets#modified_after}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.Initializer.parameter.virtualNetworkId"></a>

- *Type:* java.lang.String

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#virtual_network_id DataCloudflareZeroTrustInfrastructureAccessTargets#virtual_network_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetCreatedAfter">resetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetHostnameContains">resetHostnameContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetIpv6">resetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetModifiedAfter">resetModifiedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCreatedAfter` <a name="resetCreatedAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetCreatedAfter"></a>

```java
public void resetCreatedAfter()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetHostnameContains` <a name="resetHostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetHostnameContains"></a>

```java
public void resetHostnameContains()
```

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetIpv4"></a>

```java
public void resetIpv4()
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetIpv6"></a>

```java
public void resetIpv6()
```

##### `resetModifiedAfter` <a name="resetModifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetModifiedAfter"></a>

```java
public void resetModifiedAfter()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustInfrastructureAccessTargets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargets;

DataCloudflareZeroTrustInfrastructureAccessTargets.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargets;

DataCloudflareZeroTrustInfrastructureAccessTargets.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargets;

DataCloudflareZeroTrustInfrastructureAccessTargets.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargets;

DataCloudflareZeroTrustInfrastructureAccessTargets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustInfrastructureAccessTargets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustInfrastructureAccessTargets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustInfrastructureAccessTargets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustInfrastructureAccessTargets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustInfrastructureAccessTargets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.createdAfterInput">createdAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.hostnameContainsInput">hostnameContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.ipv4Input">ipv4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.ipv6Input">ipv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.modifiedAfterInput">modifiedAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.hostnameContains">hostnameContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.modifiedAfter">modifiedAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.targets"></a>

```java
public DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList getTargets();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `createdAfterInput`<sup>Optional</sup> <a name="createdAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.createdAfterInput"></a>

```java
public java.lang.String getCreatedAfterInput();
```

- *Type:* java.lang.String

---

##### `hostnameContainsInput`<sup>Optional</sup> <a name="hostnameContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.hostnameContainsInput"></a>

```java
public java.lang.String getHostnameContainsInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.ipv4Input"></a>

```java
public java.lang.String getIpv4Input();
```

- *Type:* java.lang.String

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.ipv6Input"></a>

```java
public java.lang.String getIpv6Input();
```

- *Type:* java.lang.String

---

##### `modifiedAfterInput`<sup>Optional</sup> <a name="modifiedAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.modifiedAfterInput"></a>

```java
public java.lang.String getModifiedAfterInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `createdAfter`<sup>Required</sup> <a name="createdAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `hostnameContains`<sup>Required</sup> <a name="hostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.hostnameContains"></a>

```java
public java.lang.String getHostnameContains();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

---

##### `modifiedAfter`<sup>Required</sup> <a name="modifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.modifiedAfter"></a>

```java
public java.lang.String getModifiedAfter();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargets.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustInfrastructureAccessTargetsConfig <a name="DataCloudflareZeroTrustInfrastructureAccessTargetsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig;

DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.builder()
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
//  .createdAfter(java.lang.String)
//  .hostname(java.lang.String)
//  .hostnameContains(java.lang.String)
//  .ipv4(java.lang.String)
//  .ipv6(java.lang.String)
//  .modifiedAfter(java.lang.String)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | A date and time after a target was created to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The hostname of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.hostnameContains">hostnameContains</a></code> | <code>java.lang.String</code> | Partial match to the hostname of a target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | The target's IPv6 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.modifiedAfter">modifiedAfter</a></code> | <code>java.lang.String</code> | A date and time after a target was modified to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | The private virtual network identifier for the target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#account_id DataCloudflareZeroTrustInfrastructureAccessTargets#account_id}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

A date and time after a target was created to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#created_after DataCloudflareZeroTrustInfrastructureAccessTargets#created_after}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The hostname of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#hostname DataCloudflareZeroTrustInfrastructureAccessTargets#hostname}

---

##### `hostnameContains`<sup>Optional</sup> <a name="hostnameContains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.hostnameContains"></a>

```java
public java.lang.String getHostnameContains();
```

- *Type:* java.lang.String

Partial match to the hostname of a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#hostname_contains DataCloudflareZeroTrustInfrastructureAccessTargets#hostname_contains}

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#ipv4 DataCloudflareZeroTrustInfrastructureAccessTargets#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#ipv6 DataCloudflareZeroTrustInfrastructureAccessTargets#ipv6}

---

##### `modifiedAfter`<sup>Optional</sup> <a name="modifiedAfter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.modifiedAfter"></a>

```java
public java.lang.String getModifiedAfter();
```

- *Type:* java.lang.String

A date and time after a target was modified to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#modified_after DataCloudflareZeroTrustInfrastructureAccessTargets#modified_after}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsConfig.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#virtual_network_id DataCloudflareZeroTrustInfrastructureAccessTargets#virtual_network_id}

---

### DataCloudflareZeroTrustInfrastructureAccessTargetsTargets <a name="DataCloudflareZeroTrustInfrastructureAccessTargetsTargets" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargets;

DataCloudflareZeroTrustInfrastructureAccessTargetsTargets.builder()
    .ip(DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargets.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargets.property.ip"></a>

```java
public DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp getIp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#ip DataCloudflareZeroTrustInfrastructureAccessTargets#ip}

---

### DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp <a name="DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp;

DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp.builder()
//  .ipv4(DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4)
//  .ipv6(DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4</a></code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6</a></code> | The target's IPv6 address. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp.property.ipv4"></a>

```java
public DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4 getIpv4();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#ipv4 DataCloudflareZeroTrustInfrastructureAccessTargets#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp.property.ipv6"></a>

```java
public DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6 getIpv6();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#ipv6 DataCloudflareZeroTrustInfrastructureAccessTargets#ipv6}

---

### DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4 <a name="DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4;

DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4.builder()
    .ipAddr(java.lang.String)
    .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | The private virtual network identifier for the target. |

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#ip_addr DataCloudflareZeroTrustInfrastructureAccessTargets#ip_addr}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#virtual_network_id DataCloudflareZeroTrustInfrastructureAccessTargets#virtual_network_id}

---

### DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6 <a name="DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6;

DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6.builder()
    .ipAddr(java.lang.String)
    .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | The private virtual network identifier for the target. |

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#ip_addr DataCloudflareZeroTrustInfrastructureAccessTargets#ip_addr}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/data-sources/zero_trust_infrastructure_access_targets#virtual_network_id DataCloudflareZeroTrustInfrastructureAccessTargets#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference <a name="DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference;

new DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddrInput"></a>

```java
public java.lang.String getIpAddrInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4</a>

---


### DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference <a name="DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference;

new DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddr">ipAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddrInput"></a>

```java
public java.lang.String getIpAddrInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddr"></a>

```java
public java.lang.String getIpAddr();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6</a>

---


### DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference <a name="DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference;

new DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4">putIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6">putIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv4` <a name="putIpv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4"></a>

```java
public void putIpv4(DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4</a>

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6"></a>

```java
public void putIpv6(DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6</a>

---

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv4"></a>

```java
public void resetIpv4()
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv6"></a>

```java
public void resetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4"></a>

```java
public DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference getIpv4();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6"></a>

```java
public DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference getIpv6();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6OutputReference</a>

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4Input"></a>

```java
public java.lang.Object getIpv4Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv4</a>

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6Input"></a>

```java
public java.lang.Object getIpv6Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpIpv6</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp</a>

---


### DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList <a name="DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList;

new DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.get"></a>

```java
public DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargets">DataCloudflareZeroTrustInfrastructureAccessTargetsTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargets">DataCloudflareZeroTrustInfrastructureAccessTargetsTargets</a>>

---


### DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference <a name="DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_infrastructure_access_targets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference;

new DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.putIp">putIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIp` <a name="putIp" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.putIp"></a>

```java
public void putIp(DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.putIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.ipInput">ipInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargets">DataCloudflareZeroTrustInfrastructureAccessTargetsTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.ip"></a>

```java
public DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference getIp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIpOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.ipInput"></a>

```java
public DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp getIpInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp">DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsIp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargetsOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustInfrastructureAccessTargetsTargets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustInfrastructureAccessTargets.DataCloudflareZeroTrustInfrastructureAccessTargetsTargets">DataCloudflareZeroTrustInfrastructureAccessTargetsTargets</a>

---



