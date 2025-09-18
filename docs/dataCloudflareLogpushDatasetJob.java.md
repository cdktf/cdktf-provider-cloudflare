# `dataCloudflareLogpushDatasetJob` Submodule <a name="`dataCloudflareLogpushDatasetJob` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLogpushDatasetJob <a name="DataCloudflareLogpushDatasetJob" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/logpush_dataset_job cloudflare_logpush_dataset_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_logpush_dataset_job.DataCloudflareLogpushDatasetJob;

DataCloudflareLogpushDatasetJob.Builder.create(Construct scope, java.lang.String id)
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
//  .accountId(java.lang.String)
//  .datasetId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.datasetId">datasetId</a></code> | <code>java.lang.String</code> | Name of the dataset. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/logpush_dataset_job#account_id DataCloudflareLogpushDatasetJob#account_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.datasetId"></a>

- *Type:* java.lang.String

Name of the dataset.

A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/).
Available values: "access_requests", "audit_logs", "audit_logs_v2", "biso_user_actions", "casb_findings", "device_posture_results", "dlp_forensic_copies", "dns_firewall_logs", "dns_logs", "email_security_alerts", "firewall_events", "gateway_dns", "gateway_http", "gateway_network", "http_requests", "magic_ids_detections", "nel_reports", "network_analytics_logs", "page_shield_events", "sinkhole_http_logs", "spectrum_events", "ssh_logs", "workers_trace_events", "zaraz_events", "zero_trust_network_sessions".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/logpush_dataset_job#dataset_id DataCloudflareLogpushDatasetJob#dataset_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/logpush_dataset_job#zone_id DataCloudflareLogpushDatasetJob#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareLogpushDatasetJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_logpush_dataset_job.DataCloudflareLogpushDatasetJob;

DataCloudflareLogpushDatasetJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_logpush_dataset_job.DataCloudflareLogpushDatasetJob;

DataCloudflareLogpushDatasetJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_logpush_dataset_job.DataCloudflareLogpushDatasetJob;

DataCloudflareLogpushDatasetJob.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_logpush_dataset_job.DataCloudflareLogpushDatasetJob;

DataCloudflareLogpushDatasetJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareLogpushDatasetJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareLogpushDatasetJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareLogpushDatasetJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareLogpushDatasetJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/logpush_dataset_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareLogpushDatasetJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.destinationConf">destinationConf</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.lastComplete">lastComplete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.lastError">lastError</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.logpullOptions">logpullOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.maxUploadBytes">maxUploadBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.maxUploadIntervalSeconds">maxUploadIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.maxUploadRecords">maxUploadRecords</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.outputOptions">outputOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference">DataCloudflareLogpushDatasetJobOutputOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `destinationConf`<sup>Required</sup> <a name="destinationConf" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.destinationConf"></a>

```java
public java.lang.String getDestinationConf();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `lastComplete`<sup>Required</sup> <a name="lastComplete" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.lastComplete"></a>

```java
public java.lang.String getLastComplete();
```

- *Type:* java.lang.String

---

##### `lastError`<sup>Required</sup> <a name="lastError" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.lastError"></a>

```java
public java.lang.String getLastError();
```

- *Type:* java.lang.String

---

##### `logpullOptions`<sup>Required</sup> <a name="logpullOptions" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.logpullOptions"></a>

```java
public java.lang.String getLogpullOptions();
```

- *Type:* java.lang.String

---

##### `maxUploadBytes`<sup>Required</sup> <a name="maxUploadBytes" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.maxUploadBytes"></a>

```java
public java.lang.Number getMaxUploadBytes();
```

- *Type:* java.lang.Number

---

##### `maxUploadIntervalSeconds`<sup>Required</sup> <a name="maxUploadIntervalSeconds" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.maxUploadIntervalSeconds"></a>

```java
public java.lang.Number getMaxUploadIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `maxUploadRecords`<sup>Required</sup> <a name="maxUploadRecords" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.maxUploadRecords"></a>

```java
public java.lang.Number getMaxUploadRecords();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputOptions`<sup>Required</sup> <a name="outputOptions" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.outputOptions"></a>

```java
public DataCloudflareLogpushDatasetJobOutputOptionsOutputReference getOutputOptions();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference">DataCloudflareLogpushDatasetJobOutputOptionsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLogpushDatasetJobConfig <a name="DataCloudflareLogpushDatasetJobConfig" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_logpush_dataset_job.DataCloudflareLogpushDatasetJobConfig;

DataCloudflareLogpushDatasetJobConfig.builder()
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
//  .accountId(java.lang.String)
//  .datasetId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | Name of the dataset. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/logpush_dataset_job#account_id DataCloudflareLogpushDatasetJob#account_id}

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

Name of the dataset.

A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/).
Available values: "access_requests", "audit_logs", "audit_logs_v2", "biso_user_actions", "casb_findings", "device_posture_results", "dlp_forensic_copies", "dns_firewall_logs", "dns_logs", "email_security_alerts", "firewall_events", "gateway_dns", "gateway_http", "gateway_network", "http_requests", "magic_ids_detections", "nel_reports", "network_analytics_logs", "page_shield_events", "sinkhole_http_logs", "spectrum_events", "ssh_logs", "workers_trace_events", "zaraz_events", "zero_trust_network_sessions".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/logpush_dataset_job#dataset_id DataCloudflareLogpushDatasetJob#dataset_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/logpush_dataset_job#zone_id DataCloudflareLogpushDatasetJob#zone_id}

---

### DataCloudflareLogpushDatasetJobOutputOptions <a name="DataCloudflareLogpushDatasetJobOutputOptions" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_logpush_dataset_job.DataCloudflareLogpushDatasetJobOutputOptions;

DataCloudflareLogpushDatasetJobOutputOptions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLogpushDatasetJobOutputOptionsOutputReference <a name="DataCloudflareLogpushDatasetJobOutputOptionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_logpush_dataset_job.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference;

new DataCloudflareLogpushDatasetJobOutputOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.batchPrefix">batchPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.batchSuffix">batchSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.cve202144228">cve202144228</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.fieldNames">fieldNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.outputType">outputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordDelimiter">recordDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordPrefix">recordPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordSuffix">recordSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordTemplate">recordTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptions">DataCloudflareLogpushDatasetJobOutputOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchPrefix`<sup>Required</sup> <a name="batchPrefix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.batchPrefix"></a>

```java
public java.lang.String getBatchPrefix();
```

- *Type:* java.lang.String

---

##### `batchSuffix`<sup>Required</sup> <a name="batchSuffix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.batchSuffix"></a>

```java
public java.lang.String getBatchSuffix();
```

- *Type:* java.lang.String

---

##### `cve202144228`<sup>Required</sup> <a name="cve202144228" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.cve202144228"></a>

```java
public IResolvable getCve202144228();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

---

##### `fieldNames`<sup>Required</sup> <a name="fieldNames" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.fieldNames"></a>

```java
public java.util.List<java.lang.String> getFieldNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordDelimiter"></a>

```java
public java.lang.String getRecordDelimiter();
```

- *Type:* java.lang.String

---

##### `recordPrefix`<sup>Required</sup> <a name="recordPrefix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordPrefix"></a>

```java
public java.lang.String getRecordPrefix();
```

- *Type:* java.lang.String

---

##### `recordSuffix`<sup>Required</sup> <a name="recordSuffix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordSuffix"></a>

```java
public java.lang.String getRecordSuffix();
```

- *Type:* java.lang.String

---

##### `recordTemplate`<sup>Required</sup> <a name="recordTemplate" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordTemplate"></a>

```java
public java.lang.String getRecordTemplate();
```

- *Type:* java.lang.String

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.internalValue"></a>

```java
public DataCloudflareLogpushDatasetJobOutputOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptions">DataCloudflareLogpushDatasetJobOutputOptions</a>

---



