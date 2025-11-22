# `dataCloudflareTokenValidationRulesList` Submodule <a name="`dataCloudflareTokenValidationRulesList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareTokenValidationRulesList <a name="DataCloudflareTokenValidationRulesList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list cloudflare_token_validation_rules_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList(scope: Construct, id: string, config: DataCloudflareTokenValidationRulesListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig">DataCloudflareTokenValidationRulesListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig">DataCloudflareTokenValidationRulesListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetRuleId">resetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetTokenConfiguration">resetTokenConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetRuleId` <a name="resetRuleId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetRuleId"></a>

```typescript
public resetRuleId(): void
```

##### `resetTokenConfiguration` <a name="resetTokenConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.resetTokenConfiguration"></a>

```typescript
public resetTokenConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareTokenValidationRulesList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isConstruct"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformElement"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformDataSource"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.generateConfigForImport"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareTokenValidationRulesList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareTokenValidationRulesList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareTokenValidationRulesList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareTokenValidationRulesList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList">DataCloudflareTokenValidationRulesListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.tokenConfigurationInput">tokenConfigurationInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.tokenConfiguration">tokenConfiguration</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.result"></a>

```typescript
public readonly result: DataCloudflareTokenValidationRulesListResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList">DataCloudflareTokenValidationRulesListResultList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `tokenConfigurationInput`<sup>Optional</sup> <a name="tokenConfigurationInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.tokenConfigurationInput"></a>

```typescript
public readonly tokenConfigurationInput: string[];
```

- *Type:* string[]

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `tokenConfiguration`<sup>Required</sup> <a name="tokenConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.tokenConfiguration"></a>

```typescript
public readonly tokenConfiguration: string[];
```

- *Type:* string[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareTokenValidationRulesListConfig <a name="DataCloudflareTokenValidationRulesListConfig" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

const dataCloudflareTokenValidationRulesListConfig: dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.action">action</a></code> | <code>string</code> | Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Toggle rule on or off. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.host">host</a></code> | <code>string</code> | Select rules with this host in `include`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.hostname">hostname</a></code> | <code>string</code> | Select rules with this host in `include`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.id">id</a></code> | <code>string</code> | Select rules with these IDs. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.ruleId">ruleId</a></code> | <code>string</code> | Select rules with these IDs. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.tokenConfiguration">tokenConfiguration</a></code> | <code>string[]</code> | Select rules using any of these token configurations. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#zone_id DataCloudflareTokenValidationRulesList#zone_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#action DataCloudflareTokenValidationRulesList#action}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Toggle rule on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#enabled DataCloudflareTokenValidationRulesList#enabled}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Select rules with this host in `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#host DataCloudflareTokenValidationRulesList#host}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Select rules with this host in `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#hostname DataCloudflareTokenValidationRulesList#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Select rules with these IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#id DataCloudflareTokenValidationRulesList#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#max_items DataCloudflareTokenValidationRulesList#max_items}

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Select rules with these IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#rule_id DataCloudflareTokenValidationRulesList#rule_id}

---

##### `tokenConfiguration`<sup>Optional</sup> <a name="tokenConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListConfig.property.tokenConfiguration"></a>

```typescript
public readonly tokenConfiguration: string[];
```

- *Type:* string[]

Select rules using any of these token configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules_list#token_configuration DataCloudflareTokenValidationRulesList#token_configuration}

---

### DataCloudflareTokenValidationRulesListResult <a name="DataCloudflareTokenValidationRulesListResult" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResult.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

const dataCloudflareTokenValidationRulesListResult: dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResult = { ... }
```


### DataCloudflareTokenValidationRulesListResultSelector <a name="DataCloudflareTokenValidationRulesListResultSelector" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelector.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

const dataCloudflareTokenValidationRulesListResultSelector: dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelector = { ... }
```


### DataCloudflareTokenValidationRulesListResultSelectorExclude <a name="DataCloudflareTokenValidationRulesListResultSelectorExclude" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExclude.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

const dataCloudflareTokenValidationRulesListResultSelectorExclude: dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExclude = { ... }
```


### DataCloudflareTokenValidationRulesListResultSelectorInclude <a name="DataCloudflareTokenValidationRulesListResultSelectorInclude" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorInclude.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

const dataCloudflareTokenValidationRulesListResultSelectorInclude: dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorInclude = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareTokenValidationRulesListResultList <a name="DataCloudflareTokenValidationRulesListResultList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.get"></a>

```typescript
public get(index: number): DataCloudflareTokenValidationRulesListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareTokenValidationRulesListResultOutputReference <a name="DataCloudflareTokenValidationRulesListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference">DataCloudflareTokenValidationRulesListResultSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResult">DataCloudflareTokenValidationRulesListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.selector"></a>

```typescript
public readonly selector: DataCloudflareTokenValidationRulesListResultSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference">DataCloudflareTokenValidationRulesListResultSelectorOutputReference</a>

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareTokenValidationRulesListResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResult">DataCloudflareTokenValidationRulesListResult</a>

---


### DataCloudflareTokenValidationRulesListResultSelectorExcludeList <a name="DataCloudflareTokenValidationRulesListResultSelectorExcludeList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.get"></a>

```typescript
public get(index: number): DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference <a name="DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.operationIds">operationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExclude">DataCloudflareTokenValidationRulesListResultSelectorExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationIds`<sup>Required</sup> <a name="operationIds" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.operationIds"></a>

```typescript
public readonly operationIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareTokenValidationRulesListResultSelectorExclude;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExclude">DataCloudflareTokenValidationRulesListResultSelectorExclude</a>

---


### DataCloudflareTokenValidationRulesListResultSelectorIncludeList <a name="DataCloudflareTokenValidationRulesListResultSelectorIncludeList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.get"></a>

```typescript
public get(index: number): DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference <a name="DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.host">host</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorInclude">DataCloudflareTokenValidationRulesListResultSelectorInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.host"></a>

```typescript
public readonly host: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareTokenValidationRulesListResultSelectorInclude;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorInclude">DataCloudflareTokenValidationRulesListResultSelectorInclude</a>

---


### DataCloudflareTokenValidationRulesListResultSelectorOutputReference <a name="DataCloudflareTokenValidationRulesListResultSelectorOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationRulesList } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList">DataCloudflareTokenValidationRulesListResultSelectorExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList">DataCloudflareTokenValidationRulesListResultSelectorIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelector">DataCloudflareTokenValidationRulesListResultSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.exclude"></a>

```typescript
public readonly exclude: DataCloudflareTokenValidationRulesListResultSelectorExcludeList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorExcludeList">DataCloudflareTokenValidationRulesListResultSelectorExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.include"></a>

```typescript
public readonly include: DataCloudflareTokenValidationRulesListResultSelectorIncludeList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorIncludeList">DataCloudflareTokenValidationRulesListResultSelectorIncludeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareTokenValidationRulesListResultSelector;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRulesList.DataCloudflareTokenValidationRulesListResultSelector">DataCloudflareTokenValidationRulesListResultSelector</a>

---



