# `dataCloudflareZeroTrustRiskScoringIntegrations` Submodule <a name="`dataCloudflareZeroTrustRiskScoringIntegrations` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustRiskScoringIntegrations <a name="DataCloudflareZeroTrustRiskScoringIntegrations" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_risk_scoring_integrations cloudflare_zero_trust_risk_scoring_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustRiskScoringIntegrations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations(scope: Construct, id: string, config: DataCloudflareZeroTrustRiskScoringIntegrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig">DataCloudflareZeroTrustRiskScoringIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig">DataCloudflareZeroTrustRiskScoringIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustRiskScoringIntegrations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustRiskScoringIntegrations } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustRiskScoringIntegrations } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustRiskScoringIntegrations } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustRiskScoringIntegrations } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustRiskScoringIntegrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustRiskScoringIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustRiskScoringIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_risk_scoring_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustRiskScoringIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList">DataCloudflareZeroTrustRiskScoringIntegrationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustRiskScoringIntegrationsResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList">DataCloudflareZeroTrustRiskScoringIntegrationsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustRiskScoringIntegrationsConfig <a name="DataCloudflareZeroTrustRiskScoringIntegrationsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustRiskScoringIntegrations } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustRiskScoringIntegrationsConfig: dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_risk_scoring_integrations#account_id DataCloudflareZeroTrustRiskScoringIntegrations#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_risk_scoring_integrations#account_id DataCloudflareZeroTrustRiskScoringIntegrations#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_risk_scoring_integrations#max_items DataCloudflareZeroTrustRiskScoringIntegrations#max_items}

---

### DataCloudflareZeroTrustRiskScoringIntegrationsResult <a name="DataCloudflareZeroTrustRiskScoringIntegrationsResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustRiskScoringIntegrations } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustRiskScoringIntegrationsResult: dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustRiskScoringIntegrationsResultList <a name="DataCloudflareZeroTrustRiskScoringIntegrationsResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustRiskScoringIntegrations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference <a name="DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustRiskScoringIntegrations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.accountTag">accountTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.integrationType">integrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.referenceId">referenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.tenantUrl">tenantUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.wellKnownUrl">wellKnownUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResult">DataCloudflareZeroTrustRiskScoringIntegrationsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountTag`<sup>Required</sup> <a name="accountTag" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.accountTag"></a>

```typescript
public readonly accountTag: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

---

##### `tenantUrl`<sup>Required</sup> <a name="tenantUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.tenantUrl"></a>

```typescript
public readonly tenantUrl: string;
```

- *Type:* string

---

##### `wellKnownUrl`<sup>Required</sup> <a name="wellKnownUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.wellKnownUrl"></a>

```typescript
public readonly wellKnownUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustRiskScoringIntegrationsResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustRiskScoringIntegrations.DataCloudflareZeroTrustRiskScoringIntegrationsResult">DataCloudflareZeroTrustRiskScoringIntegrationsResult</a>

---



