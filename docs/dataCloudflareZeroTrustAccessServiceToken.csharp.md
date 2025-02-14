# `dataCloudflareZeroTrustAccessServiceToken` Submodule <a name="`dataCloudflareZeroTrustAccessServiceToken` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessServiceToken <a name="DataCloudflareZeroTrustAccessServiceToken" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_access_service_token cloudflare_zero_trust_access_service_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessServiceToken(Construct Scope, string Id, DataCloudflareZeroTrustAccessServiceTokenConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig">DataCloudflareZeroTrustAccessServiceTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig">DataCloudflareZeroTrustAccessServiceTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetServiceTokenId">ResetServiceTokenId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareZeroTrustAccessServiceTokenFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter">DataCloudflareZeroTrustAccessServiceTokenFilter</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetServiceTokenId` <a name="ResetServiceTokenId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetServiceTokenId"></a>

```csharp
private void ResetServiceTokenId()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustAccessServiceToken resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustAccessServiceToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustAccessServiceToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustAccessServiceToken.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustAccessServiceToken.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareZeroTrustAccessServiceToken resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustAccessServiceToken to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustAccessServiceToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_access_service_token#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessServiceToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference">DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.lastSeenAt">LastSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.serviceTokenIdInput">ServiceTokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.serviceTokenId">ServiceTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.filter"></a>

```csharp
public DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference">DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastSeenAt`<sup>Required</sup> <a name="LastSeenAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.lastSeenAt"></a>

```csharp
public string LastSeenAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `ServiceTokenIdInput`<sup>Optional</sup> <a name="ServiceTokenIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.serviceTokenIdInput"></a>

```csharp
public string ServiceTokenIdInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ServiceTokenId`<sup>Required</sup> <a name="ServiceTokenId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.serviceTokenId"></a>

```csharp
public string ServiceTokenId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessServiceTokenConfig <a name="DataCloudflareZeroTrustAccessServiceTokenConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessServiceTokenConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId = null,
    DataCloudflareZeroTrustAccessServiceTokenFilter Filter = null,
    string ServiceTokenId = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.accountId">AccountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter">DataCloudflareZeroTrustAccessServiceTokenFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_access_service_token#filter DataCloudflareZeroTrustAccessServiceToken#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.serviceTokenId">ServiceTokenId</a></code> | <code>string</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_access_service_token#account_id DataCloudflareZeroTrustAccessServiceToken#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.filter"></a>

```csharp
public DataCloudflareZeroTrustAccessServiceTokenFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter">DataCloudflareZeroTrustAccessServiceTokenFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_access_service_token#filter DataCloudflareZeroTrustAccessServiceToken#filter}.

---

##### `ServiceTokenId`<sup>Optional</sup> <a name="ServiceTokenId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.serviceTokenId"></a>

```csharp
public string ServiceTokenId { get; set; }
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_access_service_token#service_token_id DataCloudflareZeroTrustAccessServiceToken#service_token_id}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_access_service_token#zone_id DataCloudflareZeroTrustAccessServiceToken#zone_id}

---

### DataCloudflareZeroTrustAccessServiceTokenFilter <a name="DataCloudflareZeroTrustAccessServiceTokenFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessServiceTokenFilter {
    string Name = null,
    string Search = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter.property.name">Name</a></code> | <code>string</code> | The name of the service token. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter.property.search">Search</a></code> | <code>string</code> | Search for service tokens by other listed query parameters. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_access_service_token#name DataCloudflareZeroTrustAccessServiceToken#name}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Search for service tokens by other listed query parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_access_service_token#search DataCloudflareZeroTrustAccessServiceToken#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference <a name="DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resetSearch"></a>

```csharp
private void ResetSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



