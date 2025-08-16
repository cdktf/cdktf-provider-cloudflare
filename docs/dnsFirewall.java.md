# `dnsFirewall` Submodule <a name="`dnsFirewall` Submodule" id="@cdktf/provider-cloudflare.dnsFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsFirewall <a name="DnsFirewall" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall cloudflare_dns_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_firewall.DnsFirewall;

DnsFirewall.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .upstreamIps(java.util.List<java.lang.String>)
//  .attackMitigation(DnsFirewallAttackMitigation)
//  .deprecateAnyRequests(java.lang.Boolean)
//  .deprecateAnyRequests(IResolvable)
//  .ecsFallback(java.lang.Boolean)
//  .ecsFallback(IResolvable)
//  .maximumCacheTtl(java.lang.Number)
//  .minimumCacheTtl(java.lang.Number)
//  .negativeCacheTtl(java.lang.Number)
//  .ratelimit(java.lang.Number)
//  .retries(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | DNS Firewall cluster name. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.upstreamIps">upstreamIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.attackMitigation">attackMitigation</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a></code> | Attack mitigation settings. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.deprecateAnyRequests">deprecateAnyRequests</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to refuse to answer queries for the ANY type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.ecsFallback">ecsFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.maximumCacheTtl">maximumCacheTtl</a></code> | <code>java.lang.Number</code> | Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.minimumCacheTtl">minimumCacheTtl</a></code> | <code>java.lang.Number</code> | Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.negativeCacheTtl">negativeCacheTtl</a></code> | <code>java.lang.Number</code> | Negative DNS cache TTL This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.ratelimit">ratelimit</a></code> | <code>java.lang.Number</code> | Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster). |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#account_id DnsFirewall#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.name"></a>

- *Type:* java.lang.String

DNS Firewall cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#name DnsFirewall#name}

---

##### `upstreamIps`<sup>Required</sup> <a name="upstreamIps" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.upstreamIps"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}.

---

##### `attackMitigation`<sup>Optional</sup> <a name="attackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.attackMitigation"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

Attack mitigation settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#attack_mitigation DnsFirewall#attack_mitigation}

---

##### `deprecateAnyRequests`<sup>Optional</sup> <a name="deprecateAnyRequests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.deprecateAnyRequests"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to refuse to answer queries for the ANY type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#deprecate_any_requests DnsFirewall#deprecate_any_requests}

---

##### `ecsFallback`<sup>Optional</sup> <a name="ecsFallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.ecsFallback"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#ecs_fallback DnsFirewall#ecs_fallback}

---

##### `maximumCacheTtl`<sup>Optional</sup> <a name="maximumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.maximumCacheTtl"></a>

- *Type:* java.lang.Number

Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers.

Higher TTLs will be decreased to the maximum defined here for caching purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#maximum_cache_ttl DnsFirewall#maximum_cache_ttl}

---

##### `minimumCacheTtl`<sup>Optional</sup> <a name="minimumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.minimumCacheTtl"></a>

- *Type:* java.lang.Number

Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers.

Lower TTLs will be increased to the minimum defined here for caching purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#minimum_cache_ttl DnsFirewall#minimum_cache_ttl}

---

##### `negativeCacheTtl`<sup>Optional</sup> <a name="negativeCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.negativeCacheTtl"></a>

- *Type:* java.lang.Number

Negative DNS cache TTL This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#negative_cache_ttl DnsFirewall#negative_cache_ttl}

---

##### `ratelimit`<sup>Optional</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.ratelimit"></a>

- *Type:* java.lang.Number

Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#ratelimit DnsFirewall#ratelimit}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#retries DnsFirewall#retries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation">putAttackMitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetAttackMitigation">resetAttackMitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetDeprecateAnyRequests">resetDeprecateAnyRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetEcsFallback">resetEcsFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMaximumCacheTtl">resetMaximumCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMinimumCacheTtl">resetMinimumCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetNegativeCacheTtl">resetNegativeCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRatelimit">resetRatelimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRetries">resetRetries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttackMitigation` <a name="putAttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation"></a>

```java
public void putAttackMitigation(DnsFirewallAttackMitigation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

---

##### `resetAttackMitigation` <a name="resetAttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetAttackMitigation"></a>

```java
public void resetAttackMitigation()
```

##### `resetDeprecateAnyRequests` <a name="resetDeprecateAnyRequests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetDeprecateAnyRequests"></a>

```java
public void resetDeprecateAnyRequests()
```

##### `resetEcsFallback` <a name="resetEcsFallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetEcsFallback"></a>

```java
public void resetEcsFallback()
```

##### `resetMaximumCacheTtl` <a name="resetMaximumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMaximumCacheTtl"></a>

```java
public void resetMaximumCacheTtl()
```

##### `resetMinimumCacheTtl` <a name="resetMinimumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMinimumCacheTtl"></a>

```java
public void resetMinimumCacheTtl()
```

##### `resetNegativeCacheTtl` <a name="resetNegativeCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetNegativeCacheTtl"></a>

```java
public void resetNegativeCacheTtl()
```

##### `resetRatelimit` <a name="resetRatelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRatelimit"></a>

```java
public void resetRatelimit()
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRetries"></a>

```java
public void resetRetries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsFirewall resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_firewall.DnsFirewall;

DnsFirewall.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_firewall.DnsFirewall;

DnsFirewall.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_firewall.DnsFirewall;

DnsFirewall.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_firewall.DnsFirewall;

DnsFirewall.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DnsFirewall.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DnsFirewall resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DnsFirewall to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DnsFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DnsFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigation">attackMitigation</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference">DnsFirewallAttackMitigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dnsFirewallIps">dnsFirewallIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigationInput">attackMitigationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequestsInput">deprecateAnyRequestsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallbackInput">ecsFallbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtlInput">maximumCacheTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtlInput">minimumCacheTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtlInput">negativeCacheTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimitInput">ratelimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIpsInput">upstreamIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequests">deprecateAnyRequests</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallback">ecsFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtl">maximumCacheTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtl">minimumCacheTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtl">negativeCacheTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimit">ratelimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIps">upstreamIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attackMitigation`<sup>Required</sup> <a name="attackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigation"></a>

```java
public DnsFirewallAttackMitigationOutputReference getAttackMitigation();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference">DnsFirewallAttackMitigationOutputReference</a>

---

##### `dnsFirewallIps`<sup>Required</sup> <a name="dnsFirewallIps" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dnsFirewallIps"></a>

```java
public java.util.List<java.lang.String> getDnsFirewallIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `attackMitigationInput`<sup>Optional</sup> <a name="attackMitigationInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigationInput"></a>

```java
public java.lang.Object getAttackMitigationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

---

##### `deprecateAnyRequestsInput`<sup>Optional</sup> <a name="deprecateAnyRequestsInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequestsInput"></a>

```java
public java.lang.Object getDeprecateAnyRequestsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ecsFallbackInput`<sup>Optional</sup> <a name="ecsFallbackInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallbackInput"></a>

```java
public java.lang.Object getEcsFallbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maximumCacheTtlInput`<sup>Optional</sup> <a name="maximumCacheTtlInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtlInput"></a>

```java
public java.lang.Number getMaximumCacheTtlInput();
```

- *Type:* java.lang.Number

---

##### `minimumCacheTtlInput`<sup>Optional</sup> <a name="minimumCacheTtlInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtlInput"></a>

```java
public java.lang.Number getMinimumCacheTtlInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `negativeCacheTtlInput`<sup>Optional</sup> <a name="negativeCacheTtlInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtlInput"></a>

```java
public java.lang.Number getNegativeCacheTtlInput();
```

- *Type:* java.lang.Number

---

##### `ratelimitInput`<sup>Optional</sup> <a name="ratelimitInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimitInput"></a>

```java
public java.lang.Number getRatelimitInput();
```

- *Type:* java.lang.Number

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `upstreamIpsInput`<sup>Optional</sup> <a name="upstreamIpsInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIpsInput"></a>

```java
public java.util.List<java.lang.String> getUpstreamIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `deprecateAnyRequests`<sup>Required</sup> <a name="deprecateAnyRequests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequests"></a>

```java
public java.lang.Object getDeprecateAnyRequests();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ecsFallback`<sup>Required</sup> <a name="ecsFallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallback"></a>

```java
public java.lang.Object getEcsFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maximumCacheTtl`<sup>Required</sup> <a name="maximumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtl"></a>

```java
public java.lang.Number getMaximumCacheTtl();
```

- *Type:* java.lang.Number

---

##### `minimumCacheTtl`<sup>Required</sup> <a name="minimumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtl"></a>

```java
public java.lang.Number getMinimumCacheTtl();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `negativeCacheTtl`<sup>Required</sup> <a name="negativeCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtl"></a>

```java
public java.lang.Number getNegativeCacheTtl();
```

- *Type:* java.lang.Number

---

##### `ratelimit`<sup>Required</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimit"></a>

```java
public java.lang.Number getRatelimit();
```

- *Type:* java.lang.Number

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `upstreamIps`<sup>Required</sup> <a name="upstreamIps" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIps"></a>

```java
public java.util.List<java.lang.String> getUpstreamIps();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DnsFirewallAttackMitigation <a name="DnsFirewallAttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_firewall.DnsFirewallAttackMitigation;

DnsFirewallAttackMitigation.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .onlyWhenUpstreamUnhealthy(java.lang.Boolean)
//  .onlyWhenUpstreamUnhealthy(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.onlyWhenUpstreamUnhealthy">onlyWhenUpstreamUnhealthy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Only mitigate attacks when upstream servers seem unhealthy. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#enabled DnsFirewall#enabled}

---

##### `onlyWhenUpstreamUnhealthy`<sup>Optional</sup> <a name="onlyWhenUpstreamUnhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.onlyWhenUpstreamUnhealthy"></a>

```java
public java.lang.Object getOnlyWhenUpstreamUnhealthy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Only mitigate attacks when upstream servers seem unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#only_when_upstream_unhealthy DnsFirewall#only_when_upstream_unhealthy}

---

### DnsFirewallConfig <a name="DnsFirewallConfig" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_firewall.DnsFirewallConfig;

DnsFirewallConfig.builder()
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
    .name(java.lang.String)
    .upstreamIps(java.util.List<java.lang.String>)
//  .attackMitigation(DnsFirewallAttackMitigation)
//  .deprecateAnyRequests(java.lang.Boolean)
//  .deprecateAnyRequests(IResolvable)
//  .ecsFallback(java.lang.Boolean)
//  .ecsFallback(IResolvable)
//  .maximumCacheTtl(java.lang.Number)
//  .minimumCacheTtl(java.lang.Number)
//  .negativeCacheTtl(java.lang.Number)
//  .ratelimit(java.lang.Number)
//  .retries(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.name">name</a></code> | <code>java.lang.String</code> | DNS Firewall cluster name. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.upstreamIps">upstreamIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.attackMitigation">attackMitigation</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a></code> | Attack mitigation settings. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.deprecateAnyRequests">deprecateAnyRequests</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to refuse to answer queries for the ANY type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ecsFallback">ecsFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.maximumCacheTtl">maximumCacheTtl</a></code> | <code>java.lang.Number</code> | Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.minimumCacheTtl">minimumCacheTtl</a></code> | <code>java.lang.Number</code> | Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.negativeCacheTtl">negativeCacheTtl</a></code> | <code>java.lang.Number</code> | Negative DNS cache TTL This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ratelimit">ratelimit</a></code> | <code>java.lang.Number</code> | Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster). |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#account_id DnsFirewall#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

DNS Firewall cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#name DnsFirewall#name}

---

##### `upstreamIps`<sup>Required</sup> <a name="upstreamIps" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.upstreamIps"></a>

```java
public java.util.List<java.lang.String> getUpstreamIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}.

---

##### `attackMitigation`<sup>Optional</sup> <a name="attackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.attackMitigation"></a>

```java
public DnsFirewallAttackMitigation getAttackMitigation();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

Attack mitigation settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#attack_mitigation DnsFirewall#attack_mitigation}

---

##### `deprecateAnyRequests`<sup>Optional</sup> <a name="deprecateAnyRequests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.deprecateAnyRequests"></a>

```java
public java.lang.Object getDeprecateAnyRequests();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to refuse to answer queries for the ANY type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#deprecate_any_requests DnsFirewall#deprecate_any_requests}

---

##### `ecsFallback`<sup>Optional</sup> <a name="ecsFallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ecsFallback"></a>

```java
public java.lang.Object getEcsFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#ecs_fallback DnsFirewall#ecs_fallback}

---

##### `maximumCacheTtl`<sup>Optional</sup> <a name="maximumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.maximumCacheTtl"></a>

```java
public java.lang.Number getMaximumCacheTtl();
```

- *Type:* java.lang.Number

Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers.

Higher TTLs will be decreased to the maximum defined here for caching purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#maximum_cache_ttl DnsFirewall#maximum_cache_ttl}

---

##### `minimumCacheTtl`<sup>Optional</sup> <a name="minimumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.minimumCacheTtl"></a>

```java
public java.lang.Number getMinimumCacheTtl();
```

- *Type:* java.lang.Number

Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers.

Lower TTLs will be increased to the minimum defined here for caching purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#minimum_cache_ttl DnsFirewall#minimum_cache_ttl}

---

##### `negativeCacheTtl`<sup>Optional</sup> <a name="negativeCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.negativeCacheTtl"></a>

```java
public java.lang.Number getNegativeCacheTtl();
```

- *Type:* java.lang.Number

Negative DNS cache TTL This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#negative_cache_ttl DnsFirewall#negative_cache_ttl}

---

##### `ratelimit`<sup>Optional</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ratelimit"></a>

```java
public java.lang.Number getRatelimit();
```

- *Type:* java.lang.Number

Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#ratelimit DnsFirewall#ratelimit}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/dns_firewall#retries DnsFirewall#retries}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsFirewallAttackMitigationOutputReference <a name="DnsFirewallAttackMitigationOutputReference" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_firewall.DnsFirewallAttackMitigationOutputReference;

new DnsFirewallAttackMitigationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetOnlyWhenUpstreamUnhealthy">resetOnlyWhenUpstreamUnhealthy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetOnlyWhenUpstreamUnhealthy` <a name="resetOnlyWhenUpstreamUnhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetOnlyWhenUpstreamUnhealthy"></a>

```java
public void resetOnlyWhenUpstreamUnhealthy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthyInput">onlyWhenUpstreamUnhealthyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy">onlyWhenUpstreamUnhealthy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onlyWhenUpstreamUnhealthyInput`<sup>Optional</sup> <a name="onlyWhenUpstreamUnhealthyInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthyInput"></a>

```java
public java.lang.Object getOnlyWhenUpstreamUnhealthyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onlyWhenUpstreamUnhealthy`<sup>Required</sup> <a name="onlyWhenUpstreamUnhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy"></a>

```java
public java.lang.Object getOnlyWhenUpstreamUnhealthy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

---



