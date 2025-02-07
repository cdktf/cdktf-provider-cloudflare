# `dataCloudflareZeroTrustDlpPredefinedProfile` Submodule <a name="`dataCloudflareZeroTrustDlpPredefinedProfile` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpPredefinedProfile <a name="DataCloudflareZeroTrustDlpPredefinedProfile" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpPredefinedProfile(Construct Scope, string Id, DataCloudflareZeroTrustDlpPredefinedProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig">DataCloudflareZeroTrustDlpPredefinedProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig">DataCloudflareZeroTrustDlpPredefinedProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustDlpPredefinedProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustDlpPredefinedProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustDlpPredefinedProfile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustDlpPredefinedProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDlpPredefinedProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDlpPredefinedProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/zero_trust_dlp_predefined_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpPredefinedProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.allowedMatchCount">AllowedMatchCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.contextAwareness">ContextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.entries">Entries</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList">DataCloudflareZeroTrustDlpPredefinedProfileEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.ocrEnabled">OcrEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.openAccess">OpenAccess</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.profileIdInput">ProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AllowedMatchCount`<sup>Required</sup> <a name="AllowedMatchCount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.allowedMatchCount"></a>

```csharp
public double AllowedMatchCount { get; }
```

- *Type:* double

---

##### `ConfidenceThreshold`<sup>Required</sup> <a name="ConfidenceThreshold" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.confidenceThreshold"></a>

```csharp
public string ConfidenceThreshold { get; }
```

- *Type:* string

---

##### `ContextAwareness`<sup>Required</sup> <a name="ContextAwareness" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.contextAwareness"></a>

```csharp
public DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference ContextAwareness { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.entries"></a>

```csharp
public DataCloudflareZeroTrustDlpPredefinedProfileEntriesList Entries { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList">DataCloudflareZeroTrustDlpPredefinedProfileEntriesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OcrEnabled`<sup>Required</sup> <a name="OcrEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.ocrEnabled"></a>

```csharp
public IResolvable OcrEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OpenAccess`<sup>Required</sup> <a name="OpenAccess" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.openAccess"></a>

```csharp
public IResolvable OpenAccess { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.profileIdInput"></a>

```csharp
public string ProfileIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpPredefinedProfileConfig <a name="DataCloudflareZeroTrustDlpPredefinedProfileConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpPredefinedProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string ProfileId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/zero_trust_dlp_predefined_profile#account_id DataCloudflareZeroTrustDlpPredefinedProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.profileId">ProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/zero_trust_dlp_predefined_profile#profile_id DataCloudflareZeroTrustDlpPredefinedProfile#profile_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/zero_trust_dlp_predefined_profile#account_id DataCloudflareZeroTrustDlpPredefinedProfile#account_id}.

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.profileId"></a>

```csharp
public string ProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/zero_trust_dlp_predefined_profile#profile_id DataCloudflareZeroTrustDlpPredefinedProfile#profile_id}.

---

### DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness <a name="DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness {

};
```


### DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip <a name="DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip {

};
```


### DataCloudflareZeroTrustDlpPredefinedProfileEntries <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntries" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpPredefinedProfileEntries {

};
```


### DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence {

};
```


### DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.skip">Skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness">DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Skip`<sup>Required</sup> <a name="Skip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.skip"></a>

```csharp
public DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference Skip { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness">DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness</a>

---


### DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.files">Files</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip">DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.files"></a>

```csharp
public IResolvable Files { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip">DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip</a>

---


### DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.available">Available</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence">DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Available`<sup>Required</sup> <a name="Available" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.available"></a>

```csharp
public IResolvable Available { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence">DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence</a>

---


### DataCloudflareZeroTrustDlpPredefinedProfileEntriesList <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntriesList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpPredefinedProfileEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.get"></a>

```csharp
private DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.confidence">Confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.pattern">Pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.secret">Secret</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.wordList">WordList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntries">DataCloudflareZeroTrustDlpPredefinedProfileEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Confidence`<sup>Required</sup> <a name="Confidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.confidence"></a>

```csharp
public DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference Confidence { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.pattern"></a>

```csharp
public DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference Pattern { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference</a>

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.secret"></a>

```csharp
public IResolvable Secret { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `WordList`<sup>Required</sup> <a name="WordList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.wordList"></a>

```csharp
public string WordList { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDlpPredefinedProfileEntries InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntries">DataCloudflareZeroTrustDlpPredefinedProfileEntries</a>

---


### DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.validation">Validation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern">DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.validation"></a>

```csharp
public string Validation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern">DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern</a>

---



