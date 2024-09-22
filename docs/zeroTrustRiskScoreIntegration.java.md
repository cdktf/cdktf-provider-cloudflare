# `zeroTrustRiskScoreIntegration` Submodule <a name="`zeroTrustRiskScoreIntegration` Submodule" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustRiskScoreIntegration <a name="ZeroTrustRiskScoreIntegration" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_risk_score_integration cloudflare_zero_trust_risk_score_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_risk_score_integration.ZeroTrustRiskScoreIntegration;

ZeroTrustRiskScoreIntegration.Builder.create(Construct scope, java.lang.String id)
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
    .integrationType(java.lang.String)
    .tenantUrl(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .referenceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.integrationType">integrationType</a></code> | <code>java.lang.String</code> | The type of integration, e.g. 'Okta'. Full list of allowed values can be found here: https://developers.cloudflare.com/api/operations/dlp-zt-risk-score-integration-create#request-body. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.tenantUrl">tenantUrl</a></code> | <code>java.lang.String</code> | The base url of the tenant, e.g. 'https://tenant.okta.com'. Must be your Okta Tenant URL and not your custom domain. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.referenceId">referenceId</a></code> | <code>java.lang.String</code> | A reference id that can be supplied by the client. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_risk_score_integration#account_id ZeroTrustRiskScoreIntegration#account_id}

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.integrationType"></a>

- *Type:* java.lang.String

The type of integration, e.g. 'Okta'. Full list of allowed values can be found here: https://developers.cloudflare.com/api/operations/dlp-zt-risk-score-integration-create#request-body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_risk_score_integration#integration_type ZeroTrustRiskScoreIntegration#integration_type}

---

##### `tenantUrl`<sup>Required</sup> <a name="tenantUrl" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.tenantUrl"></a>

- *Type:* java.lang.String

The base url of the tenant, e.g. 'https://tenant.okta.com'. Must be your Okta Tenant URL and not your custom domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_risk_score_integration#tenant_url ZeroTrustRiskScoreIntegration#tenant_url}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_risk_score_integration#active ZeroTrustRiskScoreIntegration#active}

---

##### `referenceId`<sup>Optional</sup> <a name="referenceId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.referenceId"></a>

- *Type:* java.lang.String

A reference id that can be supplied by the client.

Currently this should be set to the Access-Okta IDP ID (a UUIDv4). If omitted, a random UUIDv4 is used. https://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_risk_score_integration#reference_id ZeroTrustRiskScoreIntegration#reference_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetReferenceId">resetReferenceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetActive"></a>

```java
public void resetActive()
```

##### `resetReferenceId` <a name="resetReferenceId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetReferenceId"></a>

```java
public void resetReferenceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustRiskScoreIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_risk_score_integration.ZeroTrustRiskScoreIntegration;

ZeroTrustRiskScoreIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_risk_score_integration.ZeroTrustRiskScoreIntegration;

ZeroTrustRiskScoreIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_risk_score_integration.ZeroTrustRiskScoreIntegration;

ZeroTrustRiskScoreIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_risk_score_integration.ZeroTrustRiskScoreIntegration;

ZeroTrustRiskScoreIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustRiskScoreIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustRiskScoreIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustRiskScoreIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustRiskScoreIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_risk_score_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustRiskScoreIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.wellKnownUrl">wellKnownUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.integrationTypeInput">integrationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.referenceIdInput">referenceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tenantUrlInput">tenantUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.referenceId">referenceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tenantUrl">tenantUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `wellKnownUrl`<sup>Required</sup> <a name="wellKnownUrl" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.wellKnownUrl"></a>

```java
public java.lang.String getWellKnownUrl();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `integrationTypeInput`<sup>Optional</sup> <a name="integrationTypeInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.integrationTypeInput"></a>

```java
public java.lang.String getIntegrationTypeInput();
```

- *Type:* java.lang.String

---

##### `referenceIdInput`<sup>Optional</sup> <a name="referenceIdInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.referenceIdInput"></a>

```java
public java.lang.String getReferenceIdInput();
```

- *Type:* java.lang.String

---

##### `tenantUrlInput`<sup>Optional</sup> <a name="tenantUrlInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tenantUrlInput"></a>

```java
public java.lang.String getTenantUrlInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.referenceId"></a>

```java
public java.lang.String getReferenceId();
```

- *Type:* java.lang.String

---

##### `tenantUrl`<sup>Required</sup> <a name="tenantUrl" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tenantUrl"></a>

```java
public java.lang.String getTenantUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustRiskScoreIntegrationConfig <a name="ZeroTrustRiskScoreIntegrationConfig" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_risk_score_integration.ZeroTrustRiskScoreIntegrationConfig;

ZeroTrustRiskScoreIntegrationConfig.builder()
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
    .integrationType(java.lang.String)
    .tenantUrl(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .referenceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | The type of integration, e.g. 'Okta'. Full list of allowed values can be found here: https://developers.cloudflare.com/api/operations/dlp-zt-risk-score-integration-create#request-body. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.tenantUrl">tenantUrl</a></code> | <code>java.lang.String</code> | The base url of the tenant, e.g. 'https://tenant.okta.com'. Must be your Okta Tenant URL and not your custom domain. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.referenceId">referenceId</a></code> | <code>java.lang.String</code> | A reference id that can be supplied by the client. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_risk_score_integration#account_id ZeroTrustRiskScoreIntegration#account_id}

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

The type of integration, e.g. 'Okta'. Full list of allowed values can be found here: https://developers.cloudflare.com/api/operations/dlp-zt-risk-score-integration-create#request-body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_risk_score_integration#integration_type ZeroTrustRiskScoreIntegration#integration_type}

---

##### `tenantUrl`<sup>Required</sup> <a name="tenantUrl" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.tenantUrl"></a>

```java
public java.lang.String getTenantUrl();
```

- *Type:* java.lang.String

The base url of the tenant, e.g. 'https://tenant.okta.com'. Must be your Okta Tenant URL and not your custom domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_risk_score_integration#tenant_url ZeroTrustRiskScoreIntegration#tenant_url}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_risk_score_integration#active ZeroTrustRiskScoreIntegration#active}

---

##### `referenceId`<sup>Optional</sup> <a name="referenceId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.referenceId"></a>

```java
public java.lang.String getReferenceId();
```

- *Type:* java.lang.String

A reference id that can be supplied by the client.

Currently this should be set to the Access-Okta IDP ID (a UUIDv4). If omitted, a random UUIDv4 is used. https://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_risk_score_integration#reference_id ZeroTrustRiskScoreIntegration#reference_id}

---


