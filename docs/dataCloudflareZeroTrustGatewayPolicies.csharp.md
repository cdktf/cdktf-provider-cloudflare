# `dataCloudflareZeroTrustGatewayPolicies` Submodule <a name="`dataCloudflareZeroTrustGatewayPolicies` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustGatewayPolicies <a name="DataCloudflareZeroTrustGatewayPolicies" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_gateway_policies cloudflare_zero_trust_gateway_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPolicies(Construct Scope, string Id, DataCloudflareZeroTrustGatewayPoliciesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig">DataCloudflareZeroTrustGatewayPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig">DataCloudflareZeroTrustGatewayPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustGatewayPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustGatewayPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustGatewayPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustGatewayPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustGatewayPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustGatewayPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_gateway_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustGatewayPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList">DataCloudflareZeroTrustGatewayPoliciesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.result"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList">DataCloudflareZeroTrustGatewayPoliciesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustGatewayPoliciesConfig <a name="DataCloudflareZeroTrustGatewayPoliciesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    double MaxItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_gateway_policies#account_id DataCloudflareZeroTrustGatewayPolicies#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_gateway_policies#account_id DataCloudflareZeroTrustGatewayPolicies#account_id}.

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_gateway_policies#max_items DataCloudflareZeroTrustGatewayPolicies#max_items}

---

### DataCloudflareZeroTrustGatewayPoliciesResult <a name="DataCloudflareZeroTrustGatewayPoliciesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResult {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultExpiration <a name="DataCloudflareZeroTrustGatewayPoliciesResultExpiration" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpiration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultExpiration {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4 <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4 {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6 <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6 {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert {

};
```


### DataCloudflareZeroTrustGatewayPoliciesResultSchedule <a name="DataCloudflareZeroTrustGatewayPoliciesResultSchedule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultSchedule {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.property.expired">Expired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpiration">DataCloudflareZeroTrustGatewayPoliciesResultExpiration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Expired`<sup>Required</sup> <a name="Expired" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.property.expired"></a>

```csharp
public IResolvable Expired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultExpiration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpiration">DataCloudflareZeroTrustGatewayPoliciesResultExpiration</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultList <a name="DataCloudflareZeroTrustGatewayPoliciesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.get"></a>

```csharp
private DataCloudflareZeroTrustGatewayPoliciesResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustGatewayPoliciesResultOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.deletedAt">DeletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.devicePosture">DevicePosture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.expiration">Expiration</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.filters">Filters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.identity">Identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.precedence">Precedence</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.readOnly">ReadOnly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.ruleSettings">RuleSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.sharable">Sharable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.sourceAccount">SourceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.traffic">Traffic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.warningStatus">WarningStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResult">DataCloudflareZeroTrustGatewayPoliciesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.deletedAt"></a>

```csharp
public string DeletedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.devicePosture"></a>

```csharp
public string DevicePosture { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.expiration"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference Expiration { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.filters"></a>

```csharp
public string[] Filters { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.identity"></a>

```csharp
public string Identity { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.precedence"></a>

```csharp
public double Precedence { get; }
```

- *Type:* double

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.readOnly"></a>

```csharp
public IResolvable ReadOnly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RuleSettings`<sup>Required</sup> <a name="RuleSettings" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.ruleSettings"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference RuleSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.schedule"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference</a>

---

##### `Sharable`<sup>Required</sup> <a name="Sharable" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.sharable"></a>

```csharp
public IResolvable Sharable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SourceAccount`<sup>Required</sup> <a name="SourceAccount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.sourceAccount"></a>

```csharp
public string SourceAccount { get; }
```

- *Type:* string

---

##### `Traffic`<sup>Required</sup> <a name="Traffic" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.traffic"></a>

```csharp
public string Traffic { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `WarningStatus`<sup>Required</sup> <a name="WarningStatus" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.warningStatus"></a>

```csharp
public string WarningStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResult">DataCloudflareZeroTrustGatewayPoliciesResult</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.property.commandLogging">CommandLogging</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommandLogging`<sup>Required</sup> <a name="CommandLogging" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.property.commandLogging"></a>

```csharp
public IResolvable CommandLogging { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.copy">Copy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.dcp">Dcp</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.dd">Dd</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.dk">Dk</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.download">Download</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.dp">Dp</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.du">Du</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.keyboard">Keyboard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.paste">Paste</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.printing">Printing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.upload">Upload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Copy`<sup>Required</sup> <a name="Copy" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.copy"></a>

```csharp
public string Copy { get; }
```

- *Type:* string

---

##### `Dcp`<sup>Required</sup> <a name="Dcp" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.dcp"></a>

```csharp
public IResolvable Dcp { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Dd`<sup>Required</sup> <a name="Dd" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.dd"></a>

```csharp
public IResolvable Dd { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Dk`<sup>Required</sup> <a name="Dk" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.dk"></a>

```csharp
public IResolvable Dk { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Download`<sup>Required</sup> <a name="Download" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.download"></a>

```csharp
public string Download { get; }
```

- *Type:* string

---

##### `Dp`<sup>Required</sup> <a name="Dp" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.dp"></a>

```csharp
public IResolvable Dp { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Du`<sup>Required</sup> <a name="Du" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.du"></a>

```csharp
public IResolvable Du { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Keyboard`<sup>Required</sup> <a name="Keyboard" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.keyboard"></a>

```csharp
public string Keyboard { get; }
```

- *Type:* string

---

##### `Paste`<sup>Required</sup> <a name="Paste" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.paste"></a>

```csharp
public string Paste { get; }
```

- *Type:* string

---

##### `Printing`<sup>Required</sup> <a name="Printing" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.printing"></a>

```csharp
public string Printing { get; }
```

- *Type:* string

---

##### `Upload`<sup>Required</sup> <a name="Upload" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.upload"></a>

```csharp
public string Upload { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.property.includeContext">IncludeContext</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.property.targetUri">TargetUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeContext`<sup>Required</sup> <a name="IncludeContext" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.property.includeContext"></a>

```csharp
public IResolvable IncludeContext { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.property.targetUri"></a>

```csharp
public string TargetUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.property.enforce">Enforce</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.property.enforce"></a>

```csharp
public IResolvable Enforce { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.get"></a>

```csharp
private DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetwork">RouteThroughPrivateNetwork</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.vnetId">VnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `RouteThroughPrivateNetwork`<sup>Required</sup> <a name="RouteThroughPrivateNetwork" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetwork"></a>

```csharp
public IResolvable RouteThroughPrivateNetwork { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `VnetId`<sup>Required</sup> <a name="VnetId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.vnetId"></a>

```csharp
public string VnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.get"></a>

```csharp
private DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetwork">RouteThroughPrivateNetwork</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.vnetId">VnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `RouteThroughPrivateNetwork`<sup>Required</sup> <a name="RouteThroughPrivateNetwork" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetwork"></a>

```csharp
public IResolvable RouteThroughPrivateNetwork { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `VnetId`<sup>Required</sup> <a name="VnetId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.vnetId"></a>

```csharp
public string VnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.property.ipv4"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List Ipv4 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List</a>

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.property.ipv6"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List Ipv6 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.property.ipv4">Ipv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.property.ipv4Fallback">Ipv4Fallback</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.property.ipv6">Ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.property.ipv4"></a>

```csharp
public string Ipv4 { get; }
```

- *Type:* string

---

##### `Ipv4Fallback`<sup>Required</sup> <a name="Ipv4Fallback" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.property.ipv4Fallback"></a>

```csharp
public string Ipv4Fallback { get; }
```

- *Type:* string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.property.ipv6"></a>

```csharp
public string Ipv6 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.includeContext">IncludeContext</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.msg">Msg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.supportUrl">SupportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeContext`<sup>Required</sup> <a name="IncludeContext" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.includeContext"></a>

```csharp
public IResolvable IncludeContext { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Msg`<sup>Required</sup> <a name="Msg" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.msg"></a>

```csharp
public string Msg { get; }
```

- *Type:* string

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.supportUrl"></a>

```csharp
public string SupportUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.addHeaders">AddHeaders</a></code> | <code>HashiCorp.Cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.allowChildBypass">AllowChildBypass</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.auditSsh">AuditSsh</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.bisoAdminControls">BisoAdminControls</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.blockPageEnabled">BlockPageEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.blockReason">BlockReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.bypassParentRule">BypassParentRule</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.checkSession">CheckSession</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.dnsResolvers">DnsResolvers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.egress">Egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.ignoreCnameCategoryMatches">IgnoreCnameCategoryMatches</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.insecureDisableDnssecValidation">InsecureDisableDnssecValidation</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.ipCategories">IpCategories</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.ipIndicatorFeeds">IpIndicatorFeeds</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.l4Override">L4Override</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.overrideHost">OverrideHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.overrideIps">OverrideIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.payloadLog">PayloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.quarantine">Quarantine</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.resolveDnsInternally">ResolveDnsInternally</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.resolveDnsThroughCloudflare">ResolveDnsThroughCloudflare</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.untrustedCert">UntrustedCert</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddHeaders`<sup>Required</sup> <a name="AddHeaders" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.addHeaders"></a>

```csharp
public StringListMap AddHeaders { get; }
```

- *Type:* HashiCorp.Cdktf.StringListMap

---

##### `AllowChildBypass`<sup>Required</sup> <a name="AllowChildBypass" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.allowChildBypass"></a>

```csharp
public IResolvable AllowChildBypass { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AuditSsh`<sup>Required</sup> <a name="AuditSsh" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.auditSsh"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference AuditSsh { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference</a>

---

##### `BisoAdminControls`<sup>Required</sup> <a name="BisoAdminControls" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.bisoAdminControls"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference BisoAdminControls { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference</a>

---

##### `BlockPage`<sup>Required</sup> <a name="BlockPage" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.blockPage"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference BlockPage { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference</a>

---

##### `BlockPageEnabled`<sup>Required</sup> <a name="BlockPageEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.blockPageEnabled"></a>

```csharp
public IResolvable BlockPageEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BlockReason`<sup>Required</sup> <a name="BlockReason" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.blockReason"></a>

```csharp
public string BlockReason { get; }
```

- *Type:* string

---

##### `BypassParentRule`<sup>Required</sup> <a name="BypassParentRule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.bypassParentRule"></a>

```csharp
public IResolvable BypassParentRule { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CheckSession`<sup>Required</sup> <a name="CheckSession" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.checkSession"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference CheckSession { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference</a>

---

##### `DnsResolvers`<sup>Required</sup> <a name="DnsResolvers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.dnsResolvers"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference DnsResolvers { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference</a>

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.egress"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference Egress { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference</a>

---

##### `IgnoreCnameCategoryMatches`<sup>Required</sup> <a name="IgnoreCnameCategoryMatches" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.ignoreCnameCategoryMatches"></a>

```csharp
public IResolvable IgnoreCnameCategoryMatches { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InsecureDisableDnssecValidation`<sup>Required</sup> <a name="InsecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.insecureDisableDnssecValidation"></a>

```csharp
public IResolvable InsecureDisableDnssecValidation { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IpCategories`<sup>Required</sup> <a name="IpCategories" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.ipCategories"></a>

```csharp
public IResolvable IpCategories { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IpIndicatorFeeds`<sup>Required</sup> <a name="IpIndicatorFeeds" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.ipIndicatorFeeds"></a>

```csharp
public IResolvable IpIndicatorFeeds { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `L4Override`<sup>Required</sup> <a name="L4Override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.l4Override"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference L4Override { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference</a>

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.notificationSettings"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference NotificationSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference</a>

---

##### `OverrideHost`<sup>Required</sup> <a name="OverrideHost" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.overrideHost"></a>

```csharp
public string OverrideHost { get; }
```

- *Type:* string

---

##### `OverrideIps`<sup>Required</sup> <a name="OverrideIps" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.overrideIps"></a>

```csharp
public string[] OverrideIps { get; }
```

- *Type:* string[]

---

##### `PayloadLog`<sup>Required</sup> <a name="PayloadLog" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.payloadLog"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference PayloadLog { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference</a>

---

##### `Quarantine`<sup>Required</sup> <a name="Quarantine" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.quarantine"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference Quarantine { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference</a>

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.redirect"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference Redirect { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference</a>

---

##### `ResolveDnsInternally`<sup>Required</sup> <a name="ResolveDnsInternally" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.resolveDnsInternally"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference ResolveDnsInternally { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference</a>

---

##### `ResolveDnsThroughCloudflare`<sup>Required</sup> <a name="ResolveDnsThroughCloudflare" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.resolveDnsThroughCloudflare"></a>

```csharp
public IResolvable ResolveDnsThroughCloudflare { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `UntrustedCert`<sup>Required</sup> <a name="UntrustedCert" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.untrustedCert"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference UntrustedCert { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.property.fileTypes">FileTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileTypes`<sup>Required</sup> <a name="FileTypes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.property.fileTypes"></a>

```csharp
public string[] FileTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.property.includeContext">IncludeContext</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.property.preservePathAndQuery">PreservePathAndQuery</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.property.targetUri">TargetUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeContext`<sup>Required</sup> <a name="IncludeContext" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.property.includeContext"></a>

```csharp
public IResolvable IncludeContext { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PreservePathAndQuery`<sup>Required</sup> <a name="PreservePathAndQuery" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.property.preservePathAndQuery"></a>

```csharp
public IResolvable PreservePathAndQuery { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.property.targetUri"></a>

```csharp
public string TargetUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.property.fallback">Fallback</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.property.viewId">ViewId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fallback`<sup>Required</sup> <a name="Fallback" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.property.fallback"></a>

```csharp
public string Fallback { get; }
```

- *Type:* string

---

##### `ViewId`<sup>Required</sup> <a name="ViewId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.property.viewId"></a>

```csharp
public string ViewId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert">DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert</a>

---


### DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference <a name="DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.fri">Fri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.mon">Mon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.sat">Sat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.sun">Sun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.thu">Thu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.tue">Tue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.wed">Wed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultSchedule">DataCloudflareZeroTrustGatewayPoliciesResultSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fri`<sup>Required</sup> <a name="Fri" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.fri"></a>

```csharp
public string Fri { get; }
```

- *Type:* string

---

##### `Mon`<sup>Required</sup> <a name="Mon" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.mon"></a>

```csharp
public string Mon { get; }
```

- *Type:* string

---

##### `Sat`<sup>Required</sup> <a name="Sat" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.sat"></a>

```csharp
public string Sat { get; }
```

- *Type:* string

---

##### `Sun`<sup>Required</sup> <a name="Sun" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.sun"></a>

```csharp
public string Sun { get; }
```

- *Type:* string

---

##### `Thu`<sup>Required</sup> <a name="Thu" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.thu"></a>

```csharp
public string Thu { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `Tue`<sup>Required</sup> <a name="Tue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.tue"></a>

```csharp
public string Tue { get; }
```

- *Type:* string

---

##### `Wed`<sup>Required</sup> <a name="Wed" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.wed"></a>

```csharp
public string Wed { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustGatewayPoliciesResultSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayPolicies.DataCloudflareZeroTrustGatewayPoliciesResultSchedule">DataCloudflareZeroTrustGatewayPoliciesResultSchedule</a>

---



